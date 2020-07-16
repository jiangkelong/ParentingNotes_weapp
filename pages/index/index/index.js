// pages/index/index/index.js
//获取应用实例
const app = getApp()
const util = require('../../../utils/util')
const computedBehavior = require('miniprogram-computed')
Page({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    note_item: app.globalData.note_item,
    note_item_color: app.globalData.note_item_color,
    history_notes: app.globalData.history_notes,
    date: util.goodDate('2020-11-01')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onPullDownRefresh: function () {
    console.log('refresh')
    // 显示标题栏进度条效果
    wx.showNavigationBarLoading();
    // 取消页面刷新动画
    wx.stopPullDownRefresh();
    this.setData({
      name: 'Jiang'
    }, () => {
      setTimeout(() => {
        // 取消标题栏进度条效果
        wx.hideNavigationBarLoading();
      }, 1000);
    });
  },
  /**
   * 计算属性
   */
  computed: {
    //将history_notes按日期分组
    history_notes_after_group(data) {
      // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
      // 这个函数的返回值会被设置到 this.data.sum 字段中
      let newArr = []
      data.history_notes.forEach((item, i) => {
        let index = -1;
        let isExists = newArr.some((newItem, j) => {
          if (item.date == newItem.date) {
            index = j;
            return true;
          }
        })
        if (!isExists) {
          newArr.push({
            date: item.date,
            format_date: util.goodDate(item.date),
            subList: [item]
          })
        } else {
          newArr[index].subList.push(item);
        }
      })
      return newArr
    },
  },
})