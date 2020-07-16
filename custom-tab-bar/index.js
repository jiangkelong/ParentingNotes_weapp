// pages/custom-tab-bar/index.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [
      {
        "url": "/pages/index/index/index",
        "icon": "homefill",
        "button":false,
        "text": "今日"
      },
      {
        "url": "/pages/category/index",
        "icon": "add",
        "button":true,
        "text": "记录"
      },
      {
        "url": "/pages/center/index/index",
        "icon": "my",
        "button":false,
        "text": "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data.index)
      wx.switchTab({ url })
      this.setData({
        selected: data.index,
      })
    }
  }
})
