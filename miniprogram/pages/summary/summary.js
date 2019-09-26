import { TYPELIST } from "../../common/const"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    summary: []
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
    const db = wx.cloud.database()
    db.collection('records').get().then(res => {
      console.log(res.data)
      let data = this.formatData(res.data);
      this.setData({
        summary: data
      })
    })
  },

  formatData(data) {
    // 1. 区分每一种类型
    const type1 = data.filter(item => item.type == 1);
    const type2 = data.filter(item => item.type == 2);
    const type3 = data.filter(item => item.type == 3);
    const type4 = data.filter(item => item.type == 4);
    const type5 = data.filter(item => item.type == 5);
    const type6 = data.filter(item => item.type == 6);
    // 2. 每一种类型分别求和

    const addRes1 = type1.reduce((result, item) => result * 1 + item.money * 1, 0)
    const addRes2 = type2.reduce((result, item) => result * 1 + item.money * 1, 0)
    const addRes3 = type3.reduce((result, item) => result * 1 + item.money * 1, 0)
    const addRes4 = type4.reduce((result, item) => result * 1 + item.money * 1, 0)
    const addRes5 = type5.reduce((result, item) => result * 1 + item.money * 1, 0)
    const addRes6 = type6.reduce((result, item) => result * 1 + item.money * 1, 0)

    // 3. 返回
    return [
      { typeText: TYPELIST[1], sum: addRes1 },
      { typeText: TYPELIST[2], sum: addRes2 },
      { typeText: TYPELIST[3], sum: addRes3 },
      { typeText: TYPELIST[4], sum: addRes4 },
      { typeText: TYPELIST[5], sum: addRes5 },
      { typeText: TYPELIST[6], sum: addRes6 }
    ]
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