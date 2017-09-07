//index.js
//获取应用实例
Page({
  data: {
    userInfo: {},
    companyInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '当前页面'
    });
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // });
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
      wx.navigateTo({
        url: '../company/company'
      })
      //更新数据
      that.setData({
       
        companyInfo: {
          name: '菱坤中国',
          logo: '/images/logo.png',
          description: '扬州菱坤电器工程有限公司是一家技术力量雄厚的专业空调公司，前身为扬州兴隆制冷维修中心，成立于2004年，公司先前主要为三洋，志高，LG等空调的厂家负责整个扬州地区的安装和维护，保养，另外承接一些厂家、知名的空调经销商的中央空调安装工程，公司的安装工程案例遍布无锡，扬州，泰州等城市，2010年三菱电机厂家，包括格力空调厂家对我们公司技术力量的认可和支持，把空调的售后服务网点设在我公司，为了立足于扬州市场，更好地为广大客户提供一站式的专业服务，公司于2010年5月更名为扬州菱坤电器工程有限公司，不仅安装、维修空调，还销售空调：从专业设计、专业销售、专业安装、专业售后、打造真正意义上的空调4S专业服务店' + '我公司现有一支技术精湛的专业安装维修团队和一支暖通专业的设计和销售团队，我们坚信只有专业才会做的更好！我公司主要经营：三菱电机，约克，格力，等知名品牌的家用（商用）中央空调，另外还有专门针对于工业厂房的特种空调，比如大型冷水机组、恒温恒湿机、全新风机组、屋顶空调机组、精密基站用空调。我公司所做的工程涉及到的包括机关单位，酒店，高档住宅小区: 如扬州天下、瘦西湖西苑、御园、京华城、瘦西湖悦园、长乐客栈、扬州力宝广场某大型KTV泰州某农行、泰州某别墅区等等。在售后方面我公司承诺只要用户您一个电话，我们即安排技术人员24小时之内赶到现场为您解决问题。希望有更多的用户能够了解我们，选择我们！ ',
          address: ' 扬州市邗江北路83号（海德公园旁） ',
          phone: '0514-87302398'  
        
        }
      })
   
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
  }
})
