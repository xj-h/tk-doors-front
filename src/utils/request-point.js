import request from './request'

// http://htsit.hanhua.com/pla-cust
function plaCust(code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  return request(config)
}

// tong2
function tong2(code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'htong.tong2'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// HTONGBACK
function hongback(code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'HTONGBACK'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// 情报（房估价）
function qingbao(code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'qingbao'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

export default {
  plaCust,
  tong2,
  hongback,
  qingbao
}
