// pages/personInformation/getAddress/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:"收货地址",
  addAddress:"../addressDetail/addressDetail",
  list:"",
  isDefault:'../../../../../images/myInformation/true.png',
  unDefault:'../../../../../images/myInformation/false.png',
  itemDefault:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  wx.setNavigationBarTitle({
    title: this.data.title,
  });
  var data=require("../../../../../data/scjData.js");
  var list=data.data.personInformation.address.fixAddress;
  this.setData({list:list,
      itemDefault:list.isDefault
    });
  },
/**
 * 进入到新增地址中
 * 
 */
intoAddAddress:function(){
  wx.navigateTo({
    url: this.data.addAddress+"?btn="+"添加地址"+"&id=",
  })
},
/**
 * 修改地址信息
 * 
 */
fixAddress:function(index){
  var id=index.currentTarget.id;
  wx.navigateTo({
    url: this.data.addAddress+"?btn="+"修改地址"+"&id="+id,
    data:{btn:"修改地址",id:id},
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
   console.log(index.currentTarget.id);
},
  defaultAddress:function(e){
    console.log(e.currentTarget.id);
    if(e.currentTarget.id==0){

    }
  }
})