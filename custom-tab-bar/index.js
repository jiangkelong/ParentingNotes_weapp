// pages/custom-tab-bar/index.js
import {
  config
} from '../utils/config'
var select_babyID = null
const app = getApp()
Component({
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    serve_host:config.serve_host,
    show: false,
    selected: 0,
    list: [{
        "url": "/pages/index/index/index",
        "icon": "homefill",
        "tabBar_page": true,
        "text": "今日"
      },
      {
        "url": "/pages/category/index",
        "icon": "add",
        "tabBar_page": false,
        "text": "选择宝宝"
      },
      {
        "url": "/pages/center/index/index",
        "icon": "my",
        "tabBar_page": true,
        "text": "我的"
      }
    ],
    baby_items: app.globalData.baby_list,
    default_baby: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //跳转
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index,
      })
    },
    //弹出宝宝选择框
    chooseBaby() {
      this.setData({
        baby_items: app.globalData.baby_list,
        show: true
      })
    },
    //隐藏宝宝选择框
    hideModal() {
      this.setData({
        show: false
      })
    },
    //确认选择
    chooseOk() {
      wx.showLoading({
        title: '切换中……',
        mask: true
      })
      app.globalData.default_baby_id = select_babyID
      wx.setStorage({
        data: select_babyID,
        key: 'default_baby_id',
      })
      var baby_list = app.globalData.baby_list
      for (let i = 0, len = baby_list.length; i < len; ++i) {
        if (baby_list[i].id == select_babyID) {
          baby_list[i].checked = true
          app.globalData.default_baby = baby_list[i]
        }
        else{
          baby_list[i].checked = false
        }
      }
      app.globalData.baby_list = baby_list
      this.setData({
        baby_items: baby_list,
        show: false
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
    },
    //单选变更
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
      select_babyID = e.detail.value
    },
    addBaby() {
      this.hideModal()
      wx.navigateTo({
        url: '/pages/baby/edit/edit'
      })
    }
  }
})