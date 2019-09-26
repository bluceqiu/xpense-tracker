// miniprogram/pages/warning/warning.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warning_type1: '',
    warning_type2: '',
    warning_type3: '',
    warning_type4: '',
    warning_type5: '',
    warning_type6: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  moneyChange(e){
    const {type} = e.currentTarget.dataset;
    this.setData({
      [`warning_type${type}`]: e.detail 
    })
  },

  save(){
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})