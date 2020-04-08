import Jasypt from 'jasypt'
import GlobalService from './GlobalService'

let instance = null
const jasypt = new Jasypt()
jasypt.setPassword('bridgemonitor2020')

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
    return this.post(`login`, { userName: username, password: jasypt.encrypt(password) })
    // return this.post(`login`, { userName: username, password })
  }

  /**
   * 查询用户名
   * @returns {Promise<*>}
   */
  getUserInfo = async (id) => {
    return this.post(`sys/user/detail/${id}`)
    // return this.post(`userDetail`)
  }

  /**
   * 查询用户下授权的菜单
   * @returns {Promise<*>}
   */
  getMenus = async () => {
    return this.post(`userMenus`)
  }

  /**
   * 用户修改密码
   * @param model
   * @returns {Promise<*>}
   */
  updatePassword = async (model) => {
    const o = {
      userName: model.userName,
      oldPasswd: jasypt.encrypt(model.oldPasswd),
      newPasswd: jasypt.encrypt(model.newPasswd),
    }
    return this.post(`modifyPasswd`, o)
  }
}

export default Service.getInstance()
