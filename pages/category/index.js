// pages/category/index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note_item: app.globalData.note_item,
    note_item_color: app.globalData.note_item_color,
    daily_list: [{
        icon: 'muru',
        page: 'muru'
      },
      {
        icon: 'naiping',
        page: 'naiping'
      },
      {
        icon: 'zhiniaoku',
        page: 'niaoku'
      },
      {
        icon: 'shuijiao',
        page: 'shuijiao'
      },
      {
        icon: 'yingerche',
        page: 'huwai'
      },
      {
        icon: 'wanju',
        page: 'wanshua'
      }
    ],
    grow_list: [{
        icon: 'tizhong',
        page: 'tizhong'
      },
      {
        icon: 'shengao',
        page: 'shengao'
      },
      {
        icon: 'yachi',
        page: 'yachi'
      },
      {
        icon: 'lichengbei',
        page: 'lichengbei'
      },
      {
        icon: 'jilu',
        page: 'biji'
      }
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
  navigateTo: function (e) {
    if (!wx.getStorageSync('token')) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        showCancel:false,
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login'
            })
          }
        }
      })
    }
    else if(!app.globalData.default_baby_id){
      wx.showModal({
        title: '提示',
        content: '请添加宝宝',
        showCancel:false,
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../baby/edit/edit'
            })
          }
        }
      })
    }
    else {
      const url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: url
      })
    }
  }
})