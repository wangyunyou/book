// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: true,
    bookNum: 1,
    checked: ['a', 'b'],
    allChecked: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  changeEdit: function() {
    this.setData({
      isEdit: !this.data.isEdit
    })
  },

  onChange(e) {
    this.setData({
      checked: e.detail
    });
  },

  allChecked(e) {
    /* 全选功能 */
    this.setData({
      allChecked: e.detail
    });

    console.log(e)
    console.log(this.data.checked)


    // this.result = this.materailList.map(item => {
    //   return item.id.toString()
    // })

    // this.checkedAll = event.$wx.detail;
    // if (this.checkedAll === false)
    //   this.result = []
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

  }
})