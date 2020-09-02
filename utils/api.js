import {HTTP} from 'http.js'

class api extends HTTP{
  //登录
  wxLogin(data){
    //返回的是一个promise
    return this.request({
      url:'Auth/wxLogin',
      method:'post',
      data:data
    })
  }
  //获取宝宝列表
  getBabyList(){
    return this.request({
      url:'Src/getBabyList'
    })
  }
}
export {api}