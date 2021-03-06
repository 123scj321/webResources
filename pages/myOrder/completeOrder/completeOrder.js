// pages/orderDetail/completeOrder/completeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "订单详情",
    again:"",
    list:"",
    orderDetail:"",
    total:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.title,
    });
    var datas=require("../../../data/scjData.js");
    this.setData({
      list:datas.data.myDetail.completeOrder.list,
      again:datas.data.myDetail.completeOrder.again,
      orderDetail:datas.data.myDetail.completeOrder.orderDetail,
      total:datas.data.myDetail.completeOrder.total
    });
    
    console.log(this.data.orderDetail);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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