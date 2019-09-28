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
    const db = wx.cloud.database()
    debugger
    db.collection("warning").add({
      data: {
        warning_type1: this.data.warning_type1,
        warning_type2: this.data.warning_type2,
        warning_type3: this.data.warning_type3,
        warning_type4: this.data.warning_type4,
        warning_type5: this.data.warning_type5,
        warning_type6: this.data.warning_type6
      }
    }).then(res=>{
      wx.showToast({
        title: '成功',
        icon: 'success',
        mask: true,
        duration: 2000,
        success:()=>{
          setTimeout(()=>{wx.navigateBack()}, 2000)
        }
      })

      
    }).catch(err=>{
      wx.showToast({
        title: '新增失败',
        icon: 'fail',
        duration: 2000
      })
    })
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