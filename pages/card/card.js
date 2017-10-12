//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    products:[]
  },
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/card/card'
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      products: [			
        { productId: '1', name:  '空调'},
        { productId: '2', name: '新风' },
        { productId: '3', name: '地暖' },
        { productId: '4', name: '净水' },
        ]
    })
  }
})
