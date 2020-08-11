/** 
 * 后台返回的格式：
 * res_data={
 *  success,//是否成功
 *  message,//消息
 *  statusCode,//状态码
 *  data //成功返回的数据
 * }
 * */
//请求基本url
const baseUrl = "http://localhost:64089/api/";
//定义错误码
const tips = {
  //10086:表示显示后端返回的错误信息message
  1: "抱歉，出现了一个错误",
  401: "401：未登录",
  403: "403：token失效",
  404: "404：请求地址无效",
  500: "500：服务器错误"
}

class HTTP {
  request({
    url,
    data = {},
    //callback = '',
    method = 'get'
  }) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    let timeStart = Date.now();
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: data,
        method: method,
        header: {
          'content-type': 'application/json',
          'token': wx.getStorageSync('token') || ''
        },
        complete: res => {
          wx.hideLoading();
          console.log(`耗时${Date.now() - timeStart}`);
          //重新请求完token，再次执行后的请求在这里拦截
          // if (callback) {
          //   callback(res.data.data);
          //   return
          // }
          if (res.statusCode == 200) {
            if (res.data.statusCode == 200) {
              resolve(res.data.data)
            } else {
              this._show_error(res.data.statusCode, res.data.message)
              //console.log(res)
              reject()
            }
          } else if (res.statusCode == 403) {
            //未登录，跳转登录页
            wx.showModal({
              title: '提示',
              content: '请登录',
              showCancel:false,
              success(res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: 'pages/login/login'
                  })
                }
              }
            })
          } else if (res.statusCode == 401) {
            //token过期，重新获取token，然后再次请求
            getNewToken().then(() => {
              request({
                url,
                data,
                //callback: resolve,
                method
              })
            })
          } else {
            this._show_error(res.statusCode)
            //console.log(res)
            reject()
          }
        }
      })
    })
  }

  //获取新token
  getNewToken() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + 'Auth/GetToken',
        data: {
          openid: wx.getStorageSync('openId'),
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'post',
        success: function (res) {
          console.log(res);
          if (res.data.statusCode == 200) {
            wx.setStorageSync('token', res.data.data.token);
            resolve(res)
          } else if (res.data.statusCode == 403) { //用户未登录
            wx.showModal({
              title: '提示',
              content: '请登录',
              showCancel:false,
              success(res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: 'pages/login/login'
                  })
                }
              }
            })
          }
        },
      })
    })
  }
  //错误提示
  _show_error(err_code, err_msg) {
    //console.log(err_code)
    var msg;
    if (!err_code) {
      msg = tips[1];
    } else if (err_code == 10086) {
      msg = err_msg;
    } else {
      msg = tips[err_code] || tips[1];
    }
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}