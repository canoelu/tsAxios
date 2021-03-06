import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import xhr from './xhr'
function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  // 处理配置文件
  processConfig(config)
  // 发送请求
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
// 处理url
function processConfig(config: AxiosRequestConfig) {
  config.headers = transformHeaders(config)
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}
// 处理URL
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url! , params)
}
// 处理请求body-data
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
// 处理headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
// 处理response-data
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
export default dispatchRequest
