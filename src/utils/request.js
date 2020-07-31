import axios from 'axios'

const instance = axios.create({
  // headers: {}
})
const PROXY_URL = '/common/verify/getSimpleVerifyImage'

// 请求拦截
instance.interceptors.request.use(function (config) {
  // console.log(process.server, process.env.proxyURL)
  config.baseURL = process.env.proxyURL
  config.url = PROXY_URL
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function (response) {
  const resData = response.data
  if (resData.statusCode === '000000') {
    resData.success = true
    return resData
  } else if (resData.success === true || resData.success === 'true') {
    resData.success = true
    return resData
  } else if (resData.Transaction) {
    const TransHeader = resData.Transaction.TransHeader
    if (TransHeader.res_code === '0000') {
      return {
        ...TransHeader,
        success: true
      }
    } else {
      return Promise.reject(TransHeader.err_mes)
    }
  } else {
    return Promise.reject(resData)
  }
}, function (error) {
  return Promise.reject(error)
})

export default function (config) {
  return instance.request(config)
}
