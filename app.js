//app.js
import {
  api
} from 'utils/api.js'
App({
  api: new api(),
  onLaunch: function () {
    wx.getStorage({
      key: 'token',
      success: (res) => {
        //如果有token缓存，就获取数据
        this.getBabyList()
      }
    })
  },
  //获取宝宝列表
  getBabyList: function () {
    this.api.getBabyList()
      .then(r => {
        //console.log(r)
        if (r && r.length > 0) { //若列表不为空
          //获取缓存中默认的宝宝id
          var default_baby_id = wx.getStorageSync('default_baby_id')
          //console.log(typeof default_baby_id)
          if (default_baby_id) { //如果缓存中有默认的宝宝id
            //通过默认的宝宝id找到默认的宝宝对象
            let i = r.findIndex(v => v.id == default_baby_id)
            //console.log(i)
            if (i>-1) { 
              //如果返回的列表里有默认的宝宝对象
              r[i].checked = true
              this.globalData.default_baby_id = r[i].id
              this.globalData.default_baby = r[i]
            } else {
              //如果返回的列表里没有默认的宝宝对象，就将列表第一项设为默认宝宝对象
              wx.setStorage({
                data: r[0].id,
                key: 'default_baby_id',
              })
              r[0].checked = true
              this.globalData.default_baby_id = r[0].id
              this.globalData.default_baby = r[0]
            }
          } else {//如果缓存中没有默认的宝宝id
            //就将列表第一项设为默认宝宝对象
            wx.setStorage({
              data: r[0].id,
              key: 'default_baby_id',
            })
            r[0].checked = true
            this.globalData.default_baby_id = r[0].id
            this.globalData.default_baby = r[0]
          }
          this.globalData.baby_list = r
        } else {
          //若返回列表为空，清除缓存中默认的宝宝id
          wx.removeStorage({
            key: 'default_baby_id'
          })
        }
      })
  },
  // 监听宝宝切换
  babyWatch: function (callback) {
    var obj = this.globalData;
    Object.defineProperty(obj, "default_baby_id", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._baby_id = value;
        callback(value);
      },
      get: function () {
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.default_baby_id的时候，这里就会执行。
        return this._baby_id
      }
    })
  },

  // 监听宝宝列表变化
  babyListWatch: function (callback) {
    var obj = this.globalData;
    Object.defineProperty(obj, "baby_list", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._baby_list = value;
        callback(value);
      },
      get: function () {
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.baby_list的时候，这里就会执行。
        return this._baby_list
      }
    })
  },
  globalData: {
    baby_list: [],//宝宝列表
    default_baby: {},//默认的宝宝对象
    default_baby_id: null,//默认的宝宝id
    //笔记分类
    note_item: {
      muru: '亲喂',
      naiping: '奶瓶',
      niaoku: '换尿裤',
      shuijiao: '睡觉',
      huwai: '户外',
      wanshua: '玩耍',
      tizhong: '体重',
      shengao: '身高',
      yachi: '牙齿',
      lichengbei: '里程碑',
      biji: '心路'
    },
    //笔记分类颜色
    note_item_color: {
      muru: 'cyan',
      naiping: 'blue',
      niaoku: 'purple',
      shuijiao: 'mauve',
      huwai: 'brown',
      wanshua: 'pink',
      tizhong: 'olive',
      shengao: 'green',
      yachi: 'grey',
      lichengbei: 'red',
      biji: 'orange'
    },
    history_notes: [{
        date: '2020-07-14',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-14',
        time: '9:10',
        category: 'niaoku'
      },
      {
        date: '2020-07-14',
        time: '9:10',
        category: 'huwai'
      },
      {
        date: '2020-07-14',
        time: '9:10',
        category: 'wanshua'
      },
      {
        date: '2020-07-14',
        time: '9:10',
        category: 'naiping'
      },
      {
        date: '2020-07-13',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-13',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-13',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-13',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-12',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-12',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-12',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-12',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
      {
        date: '2020-07-11',
        time: '9:10',
        category: 'shuijiao'
      },
    ]
  }
})