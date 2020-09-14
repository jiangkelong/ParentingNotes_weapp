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
  addBaby(data){
    return this.request({
      url:'Baby/addBaby',
      method:'post',
      data:data
    })
  }
  modifyBaby(data){
    return this.request({
      url:'Baby/modifyBaby',
      method:'post',
      data:data
    })
  }
  //获取宝宝列表
  getBabyList(){
    return this.request({
      url:'Baby/getBabyList'
    })
  }
}
export {api}