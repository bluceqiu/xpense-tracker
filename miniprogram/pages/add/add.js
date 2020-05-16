import {TYPELIST} from "../../common/const"
import { formatDateTime } from '../../common/tool'
import QQMapWX from '../../lib/qqmap-wx-jssdk.min'
let qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 3,
    groupName: 'groupName',
    radio: '1',
    // money: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initMap();

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
        key: '2ALBZ-2QBLP-MP7DF-VDF56-ZCI3O-RYFCF'
    });
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
    // qqmapsdk.search({
    //     keyword: '酒店', // 不能为空
    //     success: function (res) {
    //         console.log(res);
    //     },
    //     fail: function (res) {
    //         console.log(res);
    //     },
    //     complete: function (res) {
    //         console.log(res);
    //     }
    // })

    qqmapsdk.reverseGeocoder({
      get_poi: 1, // 周边地址列表
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  },

  initMap(){
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        console.log("位置信息：", res);
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy

        wx.openLocation({
          latitude,
          longitude,
          success(r){
            // console.log("打开地图选择位置结果：", r)
          }
        })

      }
     })
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
      money: e.detail
    });
  },

  confirm(e){
    if(!this.data.money){
      wx.showToast({
        title: "请输入有效金额",
        icon: 'none',
        duration: 2000
      });
      console.log("请输入有效金额");
      return
    }
    const db = wx.cloud.database()
    db.collection("records").add({
      data: {
        'typeText':TYPELIST[this.data.radio],
        'type': this.data.radio,
        'money': this.data.money,
        "recordTime": formatDateTime(new Date())
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