//获取应用实例
const app = getApp()
const util = require('../../../utils/util')
Page({
  data: {
    date:util.formatTime(new Date()),
    states:['嘘嘘','嘘嘘 + 便便','便便','干燥'],
    index:0
  },
  onLoad: function () {
    
  },
  /**
 * 日历控件绑定函数 
 * 点击日期返回
 */
  onPickerChange: function (e) {
    console.log(e.detail);
    this.setData({
      date: e.detail.dateString
    })
  },
  //选择器改变赋值
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }
})