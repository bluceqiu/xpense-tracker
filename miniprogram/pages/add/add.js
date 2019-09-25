// miniprogram/pages/add/add.js
const TYPELIST = {
  1: "日常饮食",
  2: "生活用品",
  3: "固定支出",
  4: "网购",
  5: "旅游",
  6: "交通"
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 3,
    groupName: 'groupName',
    radio: '1'
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

  newGroup(){
    debugger
    
  },

  newRecord(){
    this.setData({
      status: 3
    });
  },

  radioChange(e){
    this.setData({
      radio: e.detail
    })
  },

  moneyChange(e){
    this.setData({
      money: e.detail.value
    });
  },

  confirm(e){
    const db = wx.cloud.database()
    db.collection("records").add({
      data: {
        'typeText': TYPELIST[this.radio],
        'type': this.radio,
        'money': this.money
      }
    }).then(res=>{
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }).catch(err=>{
      wx.showToast({
        title: '新增失败',
        icon: 'fail',
        duration: 2000
      })
    })

    // wx.cloud.callFunction({
    //   name: "addRecord",
    //   data: {
    //     'recordType': this.radio,
    //     'money': this.money
    //   }
      
    // }).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
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