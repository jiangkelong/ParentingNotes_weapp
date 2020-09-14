//获取应用实例
const app = getApp()
const util = require('../../../utils/util')
import {
  config
} from '../../../utils/config'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    action:'add',
    baby_data: {
      name: null,
      gender: '男',
      birthday: util.formatDate(new Date()),
      birth_weight: null,
      birth_height: null,
      identity: null,
      avatar_url: null
    },
    avatar_url: null,
    gender_list: ['男', '女'],
    gender_index: 0,
    identity_list: ['妈妈', '爸爸', '爷爷', '奶奶', '外公', '外婆', '阿姨', '姑姑', '婶婶', '姐姐', '哥哥', '保姆', '其他'],
    identity_index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {

    }
  },
  //性别选择
  GenderChange(e) {
    this.setData({
      gender_index: e.detail.value,
      ['baby_data.gender']: this.data.gender_list[e.detail.value]
    })
  },
  //生日选择
  DateChange(e) {
    this.setData({
      ['baby_data.birthday']: e.detail.value
    })
  },
  //身份选择
  IdentityChange(e) {
    this.setData({
      identity_index: e.detail.value,
      ['baby_data.identity']: this.data.identity_list[e.detail.value]
    })
  },
  //双向绑定
  bindInputChange(e) {
    let item = e.currentTarget.dataset.item; //在每个input绑定不同的item作为标识
    const m = {
      ...this.data.baby_data
    }
    m[item] = e.detail.value //对象的属性名称是动态判定时，通过方括号标记访问
    this.setData({
      baby_data: m
    })
  },
  //选择图片,上传返回地址
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]
        wx.uploadFile({
          url: config.api_base_url + 'FileHandler/UploadAvatar',
          filePath: tempFilePath,
          name: 'baby_avatar',
          success: (res) => {
            const data = JSON.parse(res.data)
            this.setData({
              avatar_url: config.serve_host + data.data,
              ['baby_data.avatar_url']: data.data
            })
          },
          fail: function (res) {
            console.log("失败")
            console.log(res);
          }
        })

      }
    });
  },
  add(){
    if(!this.data.baby_data.name){
      wx.showToast({
        title: '请输入宝宝名称',
        icon:'none'
      })
      return;
    }
    app.api.addBaby(this.data.baby_data)
      .then(r => {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1000
        })
        app.getBabyList()
        setTimeout(() => {
          wx.navigateBack()
        }, 1000);
      })
  },
  modify(){

  }
})