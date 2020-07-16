//app.js
App({
  onLaunch: function () {
    // if(wx.getStorageSync('token'))
    // {
    //   wx.reLaunch({
    //     url: 'pages/start/welcome/welcome',
    //   })
    // }
    // else{
    //   wx.reLaunch({
    //     url: 'pages/index/index/index',
    //   })
    // }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    note_item:{
      muru:'亲喂',
      naiping:'奶瓶',
      niaoku:'换尿裤',
      shuijiao:'睡觉',
      huwai:'户外',
      wanshua:'玩耍',
      tizhong:'体重',
      shengao:'身高',
      yachi:'牙齿',
      lichengbei:'里程碑',
      biji:'心路'
    },
    note_item_color:{
      muru:'cyan',
      naiping:'blue',
      niaoku:'purple',
      shuijiao:'mauve',
      huwai:'brown',
      wanshua:'pink',
      tizhong:'olive',
      shengao:'green',
      yachi:'grey',
      lichengbei:'red',
      biji:'orange'
    },
    history_notes:[
      {date:'2020-07-14',time:'9:10',category:'shuijiao'},
      {date:'2020-07-14',time:'9:10',category:'niaoku'},
      {date:'2020-07-14',time:'9:10',category:'huwai'},
      {date:'2020-07-14',time:'9:10',category:'wanshua'},
      {date:'2020-07-14',time:'9:10',category:'naiping'},
      {date:'2020-07-13',time:'9:10',category:'shuijiao'},
      {date:'2020-07-13',time:'9:10',category:'shuijiao'},
      {date:'2020-07-13',time:'9:10',category:'shuijiao'},
      {date:'2020-07-13',time:'9:10',category:'shuijiao'},
      {date:'2020-07-12',time:'9:10',category:'shuijiao'},
      {date:'2020-07-12',time:'9:10',category:'shuijiao'},
      {date:'2020-07-12',time:'9:10',category:'shuijiao'},
      {date:'2020-07-12',time:'9:10',category:'shuijiao'},
      {date:'2020-07-11',time:'9:10',category:'shuijiao'},
      {date:'2020-07-11',time:'9:10',category:'shuijiao'},
      {date:'2020-07-11',time:'9:10',category:'shuijiao'},
      {date:'2020-07-11',time:'9:10',category:'shuijiao'},
      {date:'2020-07-11',time:'9:10',category:'shuijiao'},
    ]
  }
})