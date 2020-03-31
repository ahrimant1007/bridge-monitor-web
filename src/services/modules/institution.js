import GlobalService from '../GlobalService'

/**
 * 单位相关接口
 */

let instance = null

const prefix = 'sys/institution'

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
   * 保存单位信息
   * @param institutionId
   * @param institutionName
   * @param institutionDesc
   * @returns {Promise<void>}
   */
  updateItem = async ({ institutionId, institutionName, institutionDesc }) => {
    const body = { institutionId, institutionName, institutionDesc }
    return this.post(`${prefix}/save`, body)
  }

  /**
   * 单位-列表
   * @param pageNo
   * @param pageSize
   * @returns {Promise<void>}
   */
  getList = async ({ pageNo, pageSize }) => {
    const body = { pageNo, pageSize }
    return this.post(`${prefix}/list`, body)
  }

  /**
   * 单位-删除
   * @param institutionId
   * @returns {Promise<void>}
   */
  delItem = async ({ institutionId }) => {
    const body = { institutionId }
    return this.post(`${prefix}/delete`, body)
  }

  /**
   * 单位-新增
   * @param institutionId
   * @param institutionCode
   * @param institutionName
   * @param institutionDesc
   * @returns {Promise<void>}
   */
  addItem = async ({ institutionId, institutionCode, institutionName, institutionDesc }) => {
    const body = {
      institutionId,
      institutionCode,
      institutionName,
      institutionDesc,
    }
    return this.post(`${prefix}/add`, body)
  }

  /**
   * 单位-详情
   * @param institutionId
   * @returns {Promise<*>}
   */
  getItem = async ({ institutionId }) => {
    const body = { institutionId, }
    return this.post(`${prefix}/detail`, body)
  }
}

export default Service.getInstance()
