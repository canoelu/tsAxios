export type Method =
  | 'post'
  | 'get'
  | 'delete'
  | 'head'
  | 'put'
  | 'patch'
  | 'GET'
  | 'HEAD'
  | 'OPTIONS'
  | 'options'
  | 'PUT'
  | 'PATCH'
  | 'POST'
  | 'DELETE'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
