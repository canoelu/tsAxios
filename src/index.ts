import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
// 处理url
function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}
// 处理URL
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
export default axios
