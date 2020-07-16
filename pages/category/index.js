// pages/category/index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note_item:app.globalData.note_item,
    note_item_color:app.globalData.note_item_color,
    daily_list:[
      {icon:'muru',page:'muru'},
      {icon:'naiping',page:'naping'},
      {icon:'zhiniaoku',page:'niaoku'},
      {icon:'shuijiao',page:'shuijiao'},
      {icon:'yingerche',page:'huwai'},
      {icon:'wanju',page:'wanshua'}
    ],
    grow_list:[
      {icon:'tizhong',page:'tizhong'},
      {icon:'shengao',page:'shengao'},
      {icon:'yachi',page:'yachi'},
      {icon:'lichengbei',page:'lichengbei'},
      {icon:'jilu',page:'biji'}
    ]
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
          selected: 1
        })
      }
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
})