// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [{
        url: '/images/banner_1.png'
      },
      {
        url: '/images/banner_1.png'
      },
      {
        url: '/images/banner_1.png'
      }
    ],
    autoplay: true,
    currentSwiper: 0,
    imgheight: ""
  },

  imageLoad: function(e) {
    var that = this
    wx.createSelectorQuery().selectAll('.swiperImage').boundingClientRect(function(rect) {
      that.setData({
        imgheight: rect[0].height
      })
    }).exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      background: this.data.background,
    })
  },

  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '智能借书柜',
      path: '/pages/index/index'
    }
  }
})