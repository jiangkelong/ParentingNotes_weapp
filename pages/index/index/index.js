// pages/index/index/index.js
//获取应用实例
const app = getApp()
const util = require('../../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    note_item: app.globalData.note_item,
    note_item_color: app.globalData.note_item_color,
    history_notes: app.globalData.history_notes
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.babyWatch(this.watchBaby)
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.babyListWatch(this.watchBabyList1)
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        default_baby: app.globalData.default_baby
      })
    }
  },
  onPullDownRefresh: function () {
    this.setData({
      name: 'Jiang'
    }, () => {
      setTimeout(() => {
        // 取消页面刷新动画
        wx.stopPullDownRefresh();
      }, 500);
    });
  },
  watchBabyList1(list) {
    console.log('首页：监控到宝宝列表改变')
    // var arr=list.filter((item,index)=>{
    //   return item.checked==true
    // })
    // app.globalData.default_baby=arr[0]
    this.getTabBar().setData({
      default_baby:app.globalData.default_baby
    })
  },
  watchBaby: function (id) {
    console.log('首页：监控到宝宝切换，id为：' + id)
  },
  navigateTo: function (e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },
  toMenu:function(){
    wx.navigateTo({
      url: '../../category/index'
    })
  },
  toHistory:function(){
    wx.navigateTo({
      url: '../history/history'
    })
  }
})