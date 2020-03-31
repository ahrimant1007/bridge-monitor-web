import GlobalService from './GlobalService'

let instance = null

/**
 * 调用业务相关api
 */

class Service extends GlobalService {
  constructor() {
    super()
    return instance || this
  }

  static getInstance() {
    if (!instance) {
      instance = new Service()
    }
    return instance
  }

  /**
   * 登录
   * @param username
   * @param password
   * @returns {Promise<*>}
   */
  login = async ({ username, password }) => {
    const query = this.o2query({ username, password })
    return this.post(`login?${query}`)
  }

  /**
   * 查询用户名
   * @returns {Promise<*>}
   */
  getUserInfo = async (id) => {
    const query = this.o2query({ id })
    return this.post(`sys/user/sys/user/detail?${query}`)
  }
}

export default Service.getInstance()
