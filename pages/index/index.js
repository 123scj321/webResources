//index.js
//获取应用实例
const app = getApp();
const APP_ID ='';//输入小程序appid  
const APP_SECRET ='';//输入小程序app_secret  
var OPEN_ID=''//储存获取到openid  
var SESSION_KEY=''//储存获取到session_key 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    myOrderUrl:'../myOrder/welcomeHome/welcomeHome',
    personInformationUrl:"../personInformation/personInformation/personInformation",
    myCouponUrl:'../myCoupon/welcomeHome/welcomeHome',
  },
 scan:function(){
   wx.scanCode({
     onlyFromCamera: true
   })
 },
  onLoad: function (options) {
    /**
     * 先判断其是否授权
     * 是-》我的订单，个人中心的地址，优惠券才可查
     * 否-》需登陆才可查看查看我的订单，个人中心的地址，优惠券才可查
     */
    var openid=wx.getStorageSync('openid');
    if(openid!=""){
      /**设置路径 */
          this.setData({ 
            myOrderUrl: '../myOrder/myOrder/myOrder', 
            personInformationUrl: "../personInformation/personInformation/personInformation", 
            myCouponUrl:'../myCoupon/myCoupon'
            });
    }else{
      this.isPower();
    }
    
  },
  isPower:function(){
    /**
     * 弹框获取授权
     * 允许授权 获取open ID
     * 否--》
     * 弹框2 再次询问
     * 立即授权-》个人中心-》权限设置-》用户授权-》truetrue-》获取open IDopen ID 否则不授权
     * 不授权-》open ID 空
     */
    var that=this;
    wx.showModal({
      title: '微信授权',
      content: '获取公开信息',
      confirmText: "允许",
      cancelText:"拒绝",
      success:function(res){
        console.log();
        if (res.confirm){
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
                  method: 'GET', 
                  success: function(res){
                    console.log(res.data.openid);
                    // 本地存储openid
                    wx.setStorageSync('openid',res.data.openid)
                  },
                  fail: function() {
                    // fail
                  },
                  complete: function() {
                    // complete
                  }
                })
              }else{
                  
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
          wx.showModal({
            title: '用户未授权',
            content: '微信授权后才能下单，请按“确定”，并在授权中心进行授权',
            confirmText: "立即授权",
            cancelText: "确定",
            success:function(res){
              console.log(res.confirm);
              if (res.confirm){
                  wx.navigateTo({
                    url: '../personInformation/personInformation/personInformation',
                  })
              }
            },
            fail:function(){

            }
          })
        }
      },
      fail:function(res){
      }
    })
  },
/**
 * 查看我的订单是--否登录CheckOrderIslogin
 */
  CheckOrderIslogin:function(res){
    wx.navigateTo({
      url: this.data.myOrderUrl,
    })
    // wx.request({
    //   url:'' ,
    //   success:function(res){
    //     /**若登录则跳转到我的订单页 */
    //     /**否则跳转到我的登录页 */
    //   },
    //   error:function(){}
    // })
  },
  /**
   * 查看个人中心-----是否登录CheckMyInformationIsLogin
   * 
   */
  CheckMyInformationIsLogin:function(){
    wx.navigateTo({
      url: this.data.personInformationUrl,
    })
  },
  /**
   * 
   *  查看我的优惠券--是否登录CheckCouponIslogin
   */
  CheckCouponIslogin:function(res){
    wx.navigateTo({
      url: this.data.myCouponUrl,
    })
  },
  /**
   * 登陆按钮
   * 
   */
  regist:function(){
    wx.navigateTo({
      url: '../regist/regist',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  login:function(){
    wx.navigateTo({
      url: '../logs/logs',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  }
})