import CrudService from '../CrudService'

/**
 * 单位相关接口
 */

let instance = null

const prefix = 'sys/role'

class Service extends CrudService {
  constructor() {
    super(prefix)
    return instance || this
  }

  static getInstance() {
    if (!instance) {
      instance = new Service()
    }
    return instance
  }

  /**
   * 保存用户   {"ids" roleId"}
   * @param model
   * @returns {Promise<*>}
   */
  updateUsers = async (model) => {
    return this.post(`${prefix}/saveUsers`, model)
  }

  /**
   * 保存桥梁   {"ids" roleId"}
   * @param model
   * @returns {Promise<*>}
   */
  updateBridges = async (model) => {
    return this.post(`${prefix}/saveBridges`, model)
  }

  /**
   * 保存菜单   {"ids" roleId"}
   * @param model
   * @returns {Promise<*>}
   */
  updateMenus = async (model) => {
    return this.post(`${prefix}/saveMenus`, model)
  }

  /**
   * 获取角色菜单
   * @param roleId
   * @returns {Promise<*>}
   */
  getMenus = async (roleId) => {
    const list = await this.post(`${prefix}/menus/${roleId}`)
    const o = {
      include: list.filter(e => e.match),
      exclude: list.filter(e => !e.match),
    }
    const result = {
      include: o.include.map(e => ({ ...e, key: e.id, label: e.key || e.code })),
      exclude: o.exclude.map(e => ({ ...e, key: e.id, label: e.key || e.code })),
    }
    console.log(result)
    return {
      ...result,
      all: [...result.include, ...result.exclude]
    }
  }

  /**
   * 获取角色桥梁
   * @param roleId
   * @returns {Promise<*>}
   */
  getBridges = async (roleId) => {
    const [include, exclude] = await Promise.all([
      this.post(`${prefix}/includeBridges/${roleId}`),
      this.post(`${prefix}/excludeBridges/${roleId}`),
    ])
    const result = {
      include: include.map(e => ({ ...e, key: e.bridgeId, label: e.bridgeName })),
      exclude: exclude.map(e => ({ ...e, key: e.bridgeId, label: e.bridgeName, })),
    }
    return {
      ...result,
      all: [...result.include, ...result.exclude]
    }
  }

  /**
   * 获取角色桥梁
   * @param roleId
   * @returns {Promise<*>}
   */
  getUsers = async (roleId) => {
    const [include, exclude] = await Promise.all([
      this.post(`${prefix}/includeUsers/${roleId}`),
      this.post(`${prefix}/excludeUsers/${roleId}`),
    ])
    const result = {
      include: include.map(e => ({ ...e, key: e.id, label: e.realName })),
      exclude: exclude.map(e => ({ ...e, key: e.id, label: e.realName })),
    }
    return {
      ...result,
      all: [...result.include, ...result.exclude]
    }
  }
}

export default Service.getInstance()
