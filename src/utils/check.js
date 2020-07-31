/**
  * 验证密码
  * 只能是字母或数字的组合，且不能少于6位或超出20位！
  * */
export function checkPwd (pwd) {
  let result = false
  if (pwd) {
    result = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pwd)
  }
  return result
}

/**
 * 验证手机号
 * 13,14,15,16,17,18,19开头
 */
export function checkPhone (phone) {
  let result = false
  if (phone) {
    result = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(phone)
  }
  return result
}

/**
 * 姓名校验
 * 1.中文名称 2-20个汉字
 * 2.英文名称 2-20个字母 . 和空格
 */
export function checkName (name) {
  const reg = /^([\u4E00-\u9FA5]{2,20}|[a-zA-Z.\s]{2,20})$/
  const isMatch = name && reg.test(name)
  return !!isMatch
}

/**
 * 身份证（长度）校验
 * 15位数字 | 17位数字+X
 */
export function checkIdCard (idCard) {
  const reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
  const isMatch = idCard && reg.test(idCard)
  return !!isMatch
}
