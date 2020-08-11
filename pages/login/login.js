// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.name='jiang'
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    let send_data = {
      //encryptedData: e.detail.encryptedData,
      //iv: e.detail.iv,
      nickname: encodeURIComponent(e.detail.userInfo.nickName),
      avatarUrl: e.detail.userInfo.avatarUrl
    }
    wx.login({
      success: res => {
        send_data.code = res.code
        // 发送 send_data 到后台换取 openId,  token
        app.api.wxLogin(send_data)
          .then(r => {
            wx.setStorageSync({
              key: "openId",
              data: r.openId
            })
            wx.setStorageSync({
              key: "token",
              data: r.token
            })
          })
      }
    })
  }
})