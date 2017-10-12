//index.js
//获取应用实例
var indexData = require('./data');
Page({
  data: indexData.data
  ,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/index/index'
    }
  },
  tollgnCompanyDesc: function(){
    this.setData({
      hideCompanyDesc: !this.data.hideCompanyDesc
    });
  },
  onLoad: function () {
    var markers = [{
      latitude: 32.41,
      longitude: 119.40,
    }]
    var covers = [{
      latitude: 32.41,
      longitude: 119.40,
      rotate: 0
    }]
    this.setData({
      latitude: 32.41,
      longitude: 119.40,
      markers: markers,
      covers: covers,
    }) 
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
      //获取完公司数据设置title
      wx.setNavigationBarTitle({
        title: this.data.companyInfo.name
      });
      
  },
  startMap : function(){
    wx.openLocation({
      latitude: 32.41,
      longitude: 119.40,
      scale: 18,
      name: '菱坤中国',
      address: '扬州市邗江北路83号（海德公园旁)'
    })  
  },
  onTapTag: function (e) {
    var that = this;
    var tab = e.currentTarget.id;
    var index = e.currentTarget.dataset.index;
    that.setData({
      activeIndex: index,
      tab: tab
    });
    
  },

  calling: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.companyInfo.phone, 
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  getDetail: function(e){
    var data = e.currentTarget.dataset.value,
      goodsId = data.id;
    wx.navigateTo({
      url: "../company/detail/detail?goodsId=" + goodsId,
      success: function (res) {
      },
    })
  }
})
