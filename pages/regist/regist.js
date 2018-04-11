//logs.js
// const util = require('../../utils/util.js')

// Page({
//   data: {
//     logs: []
//   },
//   onLoad: function () {
//     this.setData({
//       logs: (wx.getStorageSync('logs') || []).map(log => {
//         return util.formatTime(new Date(log))
//       })
//     })
//   }
// })
Page({
  /**
   * 页面的初始数据
   * title：标题
   * ajxtrue：
   * 
   */
  data: {
    // 
    title:"欢迎注册",
    ajxtrue: true,
    getChange: true,
    linPhone: '',
    huozheng: '',
    yanzheng:'',
    zhengTrue:false,
    isShow:'none', /*判断跳过状态*/ 
    getText:"获取验证码"
  },
  // 登录手机号
  loginPhone: function (e) {
    var phone = e.detail.value;
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      console.log(phone.length);
      if (phone.length<11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      console.log(phone.length);
      this.setData({
        ajxtrue: true,
        linPhone: phone
      })
    }
  },
  yanZhengInput: function (e) {
    var that = this;
    // console.log(e);
    var yanzheng = e.detail.value;
    var huozheng = this.data.huozheng;
    // console.log(huozheng);
    // console.log(yanzheng);
    that.setData({
      yanzheng: yanzheng,
      zhengTrue: false,
    })
    if (yanzheng.length >= 4) {
      if (yanzheng == huozheng) {
        that.setData({
          zhengTrue: true,
        })
      } else {
        that.setData({
          zhengTrue: false,
        })
        wx.showModal({
          content: '输入验证码有误',
          showCancel: false,
          success: function (res) {
          }
        })
      }
    }
  },
  yanzhengBtn: function () {
    // console.log(app.globalData.userId);
    var getChange = this.data.getChange
    var n = 59;
    var that = this;
    var phone = this.data.linPhone;
     console.log(phone);
    var user = wx.getStorageSync('user');
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 2000
      })
    } else{
      if (getChange) {
        this.setData({
          getChange: false
        })
        var time = setInterval(function () {
          var str = '(' + n + ')' + '重新获取'
          that.setData({
            getText: str
          })
          if (n <= 0) {
            that.setData({
              getChange: true,
              getText: '重新获取'
            })
            clearInterval(time);
          }
          n--;
        }, 1000);
        // 根据微信号码发送验证码
        // wx.request({
        //   url: 'https://www.didu86.com/Clothes-manager-web/codenum',
        //   data: {
        //     tel: phone,
        //   },
        //   header: {
        //     'content-type': 'application/json'
        //   },
        //   success: function (res) {
        //     var result = res.data.code;
        //     console.log(result)
        //     that.setData({
        //       huozheng: result,
        //     })
        //   }
        // })
        that.setData({
          huozheng: '1234',
        })
        console.log(this.data.huozheng);
      }
    }
  },
  /***
      * 跳过登录skipLogin
      *判断是否登录isShow
      */
  skipLogin: function (e) {
    this.setData({ isShow: this.data.isShow=='none'?'block':'none'});
  },
  /**
   *跳过登录 unLogin
   */
  unLogin:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 注册并绑定微信号 LoginAndBindWXId
   * 
   */
  LoginAndBindWXId:function(e){
    /*获取linPhone: '',yanzheng: '', */
    var linPhone = this.data.getChange;
    var yanzheng = this.data.zhengTrue;
    if (!linPhone && yanzheng){
      wx.login({
        success:function(res){
          if(res.code){
            wx.navigateTo({
              url: '../index/index',
            })
            // wx.request({
            //   url: '',
            //   data:'',
            //   success:function(res){

            //   },
            //   error:function(res){

            //   }
            // })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
  }
})
