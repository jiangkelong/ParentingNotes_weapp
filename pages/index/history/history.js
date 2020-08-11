// pages/index/history/history.js
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
    name: app.globalData.name,
    note_item: app.globalData.note_item,
    note_item_color: app.globalData.note_item_color,
    history_notes: app.globalData.history_notes,
    date: util.goodDate('2020-11-01')
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onPullDownRefresh: function () {
    console.log('refresh')
    this.setData({
      name: 'Jiang'
    }, () => {
      setTimeout(() => {
        // 取消页面刷新动画
        wx.stopPullDownRefresh();
      }, 500);
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
        //item.index = i
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
      /**
       * 显示广告，保证一屏能只能看到一条广告
       */
      // newArr[0].can_show_ad = true //第一组必定显示
      // const row = 8 //至少每隔row行才能再显示一个
      // var accumulation = 0 //自上一条广告后累计的行数
      // for (var i = 1; i < newArr.length; i++) {
      //   accumulation += newArr[i].subList.length
      //   if (accumulation >= row) {
      //     newArr[i].can_show_ad = true
      //     accumulation = 0
      //   }
      // }
      return newArr
    },
  },
  watchBaby: function (id){
    console.log('this.baby_id==' + id)
  }
})