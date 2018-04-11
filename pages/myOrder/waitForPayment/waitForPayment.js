// pages/orderDetail/waitForPayment/waitForPayment.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:"订单详情",
  m:"",
  s:"",
  time:900,
  list:"",
  orderList:"",
  total:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var datas=require("../../../data/scjData.js");
  this.setData({
      list:datas.data.myDetail.waitForPayment.list,
      orderDetail:datas.data.myDetail.waitForPayment.orderDetail,
      total:datas.data.myDetail.waitForPayment.total,
      time:datas.data.myDetail.waitForPayment.time
    });
  wx.setNavigationBarTitle({
    title: this.data.title,
  });
  setInterval(this.countTime,1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
//倒计时
  countTime:function (){
    var time=this.data.time;
    this.setData({
      m:parseInt(time/60),
      s:time%60,
      time:this.data.time-1   
    });
  },
  //删除列表
  deleteList:function(){
    this.setData({
      list:"",
      total:0
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})