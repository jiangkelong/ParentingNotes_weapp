// components/dialog/index.js
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: [Boolean, String],
      value: false
    },
    showCloseIcon: {
      type: [Boolean, String],
      value: false
    },
    useSlot: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: "提示"
    },
    showCancelButton: {
      type: Boolean,
      value: false
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    cancelButtonText: {
      type: String,
      value: "取消"
    },
    confirmButtonText: {
      type: String,
      value: "确定"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    close: function () {
      this.setData({
        show: false,
      });
    },
    onClose: function () {
      this.close()
      this.triggerEvent('close')
    },
    onCancel: function () {
      this.close()
      this.triggerEvent('cancel')
    },
    onConfirm: function () {
      this.close()
      this.triggerEvent('confirm')
    }
  }
})