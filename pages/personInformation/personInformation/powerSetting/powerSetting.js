// pages/personInformation/personInformation/powerSetting/powerSetting.js
Page({
  data:{
    addressWin:false,
    userChecked:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({userChecked:wx.getStorageSync('openid')==""?false:true});
    console.log(wx.getStorageSync('openid'));
  },
  // 获取用户授权信息
  EventHandle:function(e){
      console.log(e.detail.value);
      if(e.detail.value){
          /**
           * 获取用户信息
           * 获取用户openID
           */
          wx.login({
            success: function(res){
              // success
              console.log(res);
              if(res.code){
                wx.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session',
                  data: {
                    appid:"wx5018abd008adc9fe",  
                    secret:"c50ff5b3b30b33d127ba746edbc123aa",  
                    js_code:res.code,  
                    grant_type:'authorization_code'  
                  },
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT// header: {}, // 设置请求的 header
                  success: function(res){
                    console.log(res.data.openid);
                    console.log(res.data.session_key);
                    wx.setStorageSync('openid', res.data.openid)
                          // 向后台传递数据
                          // wx.request({
                          //   url: 'http://',
                          //   data: {
                          //     openid:res.data.openid,
                          //     session_key:res.data.session_key
                          //   },
                          //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                          //   // header: {}, // 设置请求的 header
                          //   success: function(res){
                          //     // success
                          //   },
                          //   fail: function() {
                          //     // fail
                          //   },
                          //   complete: function() {
                          //     // complete
                          //   }
                          // })
                  },
                  fail: function() {
                    // fail
                  },
                  complete: function() {
                    // complete
                  }
                })
              }else{
                wx.setStorageSync('openid',"");
              }
              
            },
            fail: function(res) {
              throw Error;
            },
            complete: function() {
              // complete
            }
          })  
          }else{
            wx.getUserInfo({
              success: function(res){
                console.log(res);
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          }
  }
})