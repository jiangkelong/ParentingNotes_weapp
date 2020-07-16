const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 将给定日期转换为 今天、昨天、前天 显示，其它日期转换为某月某日
 * 参数date为日期格式的字符串
 */
const goodDate = date => {
  var result = ''
  var d = new Date(date)
  var diff = new Date().getTime() - d.getTime()  //时间差的毫秒数
  var days = Math.floor(diff / (24 * 3600 * 1000)) //计算出相差天数
  result = (d.getMonth() + 1).toString() + '月' + d.getDate().toString() + '日'
  switch (days) {
    case 0:
      result = '今天'
      break
    case 1:
      result = '昨天'
      break
    case 2:
      result = '前天'
      break
    default:
      break
  }
  return result
}

module.exports = {
  formatTime: formatTime,
  goodDate: goodDate
}