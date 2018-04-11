// pages/orderDetail/beingSentOut/beingSentOut.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
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
      list:datas.data.myDetail.beingSentOut.list,
      orderDetail:datas.data.myDetail.beingSentOut.orderDetail,
      total:datas.data.myDetail.beingSentOut.total,
      time:datas.data.myDetail.beingSentOut.time,
    });
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