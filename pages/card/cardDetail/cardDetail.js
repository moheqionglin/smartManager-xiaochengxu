//logs.js
// var app = getApp()
Page({
  data: {
    cardDetail:{}
  },
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/card/cardDetail/cardDetail'
    }
  },
  onLoad: function (options) {
    var that = this

    // app.getUserInfo(function (userInfo) {
      console.log('load card detail page...')
      
      //更新数据
      that.setData({
        // userInfo: userInfo,
        cardDetail: {
          companyName: '菱坤中国',
          companyLogo: '/images/logo.png',
          productId: options.productId,
          productName: options.productName,
          nextMaintainDate: '2019-8-27',
          guaranteeExpire: '2022-8-27',
          contractDate: '2018-8-27',
          address: '江苏省 南京市新街口1号 101室',
          name: '马继兴'

        }
       
      })
    // })
   
  }
})
