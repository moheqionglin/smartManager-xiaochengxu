Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 50000,
    duration: 400,
    circular: true,
    isShow: false,
    warning: false,
    warnDes: "",
    number: 1,
    postData: {},
    hasLogin: false
  },
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/guarantee/guarantee'
    }
  },
  postData: {},
  checkLogin: function (self){
    try {
      var value = wx.getStorageSync('authToken')
      if (value) {
        self.setData({
          hasLogin: true});
      }else{
        wx.navigateTo({
          url: '../../pages/login/login',
        });
        return;
      }
    } catch (e) {
      wx.navigateTo({
        url: '../../pages/login/login',
      });
      return;
    }
  },
  onLoad: function (e) {
    var self = this;
    // self.checkLogin(self);
    self.setData({
      hasLogin:true,
      products: [
        {url: "../../images/delete/my-card/1.jpg",
        name: '美的空调',
        brand: '美的',
        typed:'FVXB360l-T',
        num:'F000532',
        address: '南京市秦淮区三山街格力大厦66号',
        during:'购买后三年',
        contractDate: '2016.08.31',
        expiredDate: '2017.08.31',
        gurateenDate: '2018.08.28',
        toGurteenDate: '344天'
        }, 
        {
          url: "../../images/delete/my-card/2.jpg",
          name: '美的空调',
          brand: '美的',
          typed: 'GHXB060l-E',
          num: 'G000902',
          address: '南京市秦淮区三山街格力大厦66号',
          during: '购买后三年',
          contractDate: '2017.08.31',
          expiredDate: '2018.08.31',
          gurateenDate: '2018.08.28',
          toGurteenDate: '344天'
        }, 
        {
          url: "../../images/delete/my-card/3.jpg",
          name: '美的空调',
          brand: '美的',
          typed: 'DFGB360l-T',
          num: 'T000532',
          address: '南京市秦淮区三山街格力大厦66号',
          during: '购买后三年',
          contractDate: '2017.08.31',
          expiredDate: '2018.08.31',
          gurateenDate: '2018.08.28',
          toGurteenDate: '344天'
        }]
    })
  },
  onShow: function (e) {
  },
  onHide: function () {
  }
})