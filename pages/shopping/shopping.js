//logs.js
var data = require('./data')
Page({
  data: data.data,
  onLoad: function () {
    
  },
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/shopping/shopping'
    }
  }
})
