// pages/personInformation/getAddress/addressDetail/addressDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:"收货地址",
  btn:"",
  id:"",
  name:"",
  gender:"",
  tel:"",
  address:"",
  area:"",
  door:"",
  arealist:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var data=require("../../../../../data/scjData.js");
  wx.setNavigationBarTitle({
    title: this.data.title,
  });
  this.setData({
    btn:options.btn,
    id:options.id,
    arealist:data.data.personInformation.address.area
    });
    if(this.data.id!=""){
     var list=data.data.personInformation.address.fixAddress[this.data.id];
     console.log(list);
     this.setData({
        name:list.name,
        gender:list.gender,
        tel:list.tel,
        address:list.address,
        area:list.address[0].area,
        door:list.door
     });
    }else{
      var list=data.data.personInformation.address.addAddress[0];
      console.log(list);
      this.setData({
          name:list.name,
          gender:list.gender,
          tel:list.tel,
          address:list.address,
          door:list.door
      });
    }
    console.log(this.data.arealist);

  },
  changed:function(e){
    console.log(e.currentTarget.id);
    this.setData({area:this.data.arealist[e.currentTarget.id]})
  },
  //修改性别
  changeDenger:function(e){
    this.setData({gender:e.currentTarget.id})
  }
})