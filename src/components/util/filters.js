export const formatDate = function (date) {
  let nowDate = new Date().getTime()
  let oneDay = 60 * 60 * 24
  let longTime = (nowDate - date) / 1000
  if (longTime < 60) {
    return '刚刚'
  } else if (longTime >= 60 && longTime < 3600) {
    return window.parseInt(longTime / 60) + '分钟前'
  } else if (longTime >= 3600 && longTime < oneDay) {
    return window.parseInt(longTime / 3600) + '小时前'
  } else {
    let oldDate = new Date(Number(date))
    let year = oldDate.getFullYear()
    let month = oldDate.getMonth() + 1
    let day = oldDate.getDate()
    let hours = oldDate.getHours()
    let min = oldDate.getMinutes()
    let sec = oldDate.getSeconds()
    let newDate = year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec
    return newDate
  }
}
