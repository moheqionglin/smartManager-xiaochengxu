//logs.js
var util = require('../utils/util.js');
var visitData = require('./data');
Page({
  data: visitData.data,
  onShareAppMessage: function () {
    return {
      title: '菱坤冷暖',
      desc: '最具人气的冷暖公司!',
      path: '/pages/visitTask/visitTask'
    }
  },
  onLoad: function () {
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
  cancel: function () {
    this.setData({
      hidden: true,
      deleteIndex: undefined,
      visitComment: ''
    });
  },
  confirm: function () {
    this.setData({
      hidden: true
    });
    var deleteIndex = -1;
    for (var item in this.data.willVisit){
      if (this.data.willVisit[item].id == this.data.deleteId){
        deleteIndex = item;
        break;
      }
    }

    if (deleteIndex >= 0){
      var hadVisitedItem = this.data.willVisit.splice(deleteIndex, 1)[0];
      hadVisitedItem['visitComment'] = this.data.visitComment;
      hadVisitedItem['visitDate']='今天';
      this.data.hadVisit.push(hadVisitedItem);
      this.setData({
        willVisit: this.data.willVisit,
        deleteId : undefined,
        hadVisit: this.data.hadVisit,
        visitComment: ''
      });
    }
   
    console.log("clicked confirm");
  },
  visitCommentInput: function (e) {

    this.setData({
      visitComment: e.detail.value
    })
   
  },
  successVisit: function (e){
    this.setData({ hidden: false,
      deleteId: e.currentTarget.dataset.deleteid});
  }
})
