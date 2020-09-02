//获取应用实例
const app = getApp()
const util = require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar_url: null,
    gender_list: ['男', '女'],
    gender_index: 0,
    birthday: util.formatDate(new Date()),
    identity_list: ['妈妈', '爸爸', '爷爷', '奶奶', '外公', '外婆', '阿姨', '姑姑', '婶婶', '姐姐', '哥哥', '保姆', '其他'],
    identity_index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  GenderChange(e) {
    this.setData({
      gender_index: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  IdentityChange(e) {
    this.setData({
      identity_index: e.detail.value
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        this.setData({
          avatar_url: res.tempFilePaths[0]
        })
      }
    });
  },
})