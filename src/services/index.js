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
    return this.post(`login`, { userName: username, password })
  }

  /**
   * 查询用户名
   * @returns {Promise<*>}
   */
  getUserInfo = async (id) => {
    return this.post(`sys/user/detail/${id}`)
  }

  /**
   * 用户修改密码
   * @param model
   * @returns {Promise<*>}
   */
  updatePassword = async (model) => {
    return this.post(`modifyPasswd`, model)
  }
}

export default Service.getInstance()
