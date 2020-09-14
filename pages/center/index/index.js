// pages/center/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    app.babyListWatch(this.watchBabyList2)
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2,
          default_baby: app.globalData.default_baby
        })
      }
  },
  watchBabyList2(list) {
    console.log('个人页：监控到宝宝列表改变')
    // var arr=list.filter((item,index)=>{
    //   return item.checked==true
    // })
    // app.globalData.default_baby=arr[0]
    this.getTabBar().setData({
      default_baby:app.globalData.default_baby
    })
  },
})