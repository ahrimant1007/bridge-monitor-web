import axios from 'axios'
import config from '../common/config'
import { Message } from 'element-ui'

const { baseUrl } = config

const errorHandle = (resp, msg) => {
  console.error(4, resp)
  Message.error(msg || '未知错误')
}

axios.defaults.withCredentials = true
axios.interceptors.request.use(
  req => req,
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default class {
  defaultParams = {
    withCredentials: true, // 跨域
    crossDomain: true,
    timeout: 10000, // 10s timeout
  }

  /**
   * get接口方式
   * @param path
   * @param extra 拓展配置
   */
  get(path, extra) {
    return this.fetch(path, 'get', extra)
  }

  /**
   * patch接口方式
   * @param path
   * @param data
   * @param extra 拓展配置
   */
  patch(path, data, extra) {
    return this.fetch(path, 'patch', data, extra)
  }

  /**
   * put接口方式
   * @param path
   * @param data
   * @param extra 拓展配置
   */
  put(path, data, extra) {
    return this.fetch(path, 'put', data, extra)
  }

  /**
   * post接口方式
   * @param path
   * @param data
   * @param extra 拓展配置
   */
  post(path, data, extra) {
    return this.fetch(path, 'post', data, extra)
  }

  /**
   * delete接口方式
   * @param path
   * @param extra 拓展配置
   */
  delete(path, extra) {
    return this.fetch(path, 'delete', extra)
  }

  fetch(path, method = 'get', data, extra = {}) {
    const params = {
      ...this.defaultParams,
      method,
      ...extra,
    }
    data && (params.data = data)
    return new Promise((resolve, reject) => {
      axios(`${baseUrl}${path}`, params).then((res = {}) => {
        const { status, data: payload = {} } = res
        if (status >= 200 && status < 300) {
          if (payload instanceof Blob) {
            resolve(payload)
          } else {
            // todo 根据接口设计修改
            const { code, data } = payload
            if (+code === 0) {
              return resolve(data)
            } else {
              errorHandle(payload, data)
            }
          }
        } else {
          errorHandle(payload, data)
        }
      }).catch(error => {
        console.log('fetch-exception => ')
        errorHandle(error)
        reject(error)
      })
    })
  }

  /**
   * 对象转 url
   * @param o
   * @returns {string}
   */
  o2query = (o = {}) => {
    const arr = []
    Object.keys(o).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(o, key) && (o[key] || o[key] === 0)) {
        arr.push(`${key}=${o[key]}`)
      }
    })
    return arr.join('&')
  }

  /**
   * private
   *  对象 转 FormData
   * @param o
   * @returns {FormData}
   */
  o2formData(o = {}) {
    const formData = new FormData()
    Object.keys(o).forEach(key => {
      const value = o[key] instanceof File ? o[key] : JSON.stringify(o[key])
      if (value || value === 0) {
        formData.append(key, value)
      }
    })
    return formData
  }

  /**
   * 休眠 毫秒
   * @param time
   * @returns {Promise<any>}
   */
  sleep = time => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
}
