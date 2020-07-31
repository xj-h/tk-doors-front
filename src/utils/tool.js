/**
 * 日期多格式化
 * @params date 日期实例
 * @params format 格式 (yyyy-MM-dd hh:mm:ss, yyyyMMdd, hhmmss)
 * @return String
 */
export function dateFormat (date, format) {
  let pattern = format
  const dateObj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S+': date.getMilliseconds()
  }
  if (/(y+)/i.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in dateObj) {
    if (new RegExp('(' + k + ')').test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1
        ? dateObj[k] : ('00' + dateObj[k]).substr(('' + dateObj[k]).length))
    }
  }
  return pattern
}

/**
 *  电话mask
 * @param {String} phoneNumber
 * 18883182100 -> 188***2100
 */
export function addPhoneMask (phoneNumber) {
  return phoneNumber && phoneNumber.replace(/^(\d{4})(\d{3})(\d{4})$/, '$1****$3')
}
