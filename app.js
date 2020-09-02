//app.js
import {
  api
} from 'utils/api.js'
App({
  api: new api(),
  onLaunch: function () {

    // setTimeout(() => {
    //   this.globalData.baby_list = [{
    //       id: '1',
    //       name: '柒柒',
    //       checked: true
    //     },
    //     {
    //       id: '2',
    //       name: '小九'
    //     }
    //   ]
    // }, 800);
    wx.getStorage({
      key: 'token',
      success: (res) => {
        //如果有token缓存，就获取数据
        //获取宝宝列表
        this.api.getBabyList()
          .then(r => {

          })
      }
    })
  },
  // 监听宝宝切换
  babyWatch: function (callback) {
    var obj = this.globalData;
    Object.defineProperty(obj, "baby_id", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._baby_id = value;
        callback(value);
      },
      get: function () {
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.baby_id的时候，这里就会执行。
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
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.baby_id的时候，这里就会执行。
        return this._baby_list
      }
    })
  },
  globalData: {
    baby_list: [],
    default_baby: {},
    baby_id: 1,
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