import GlobalService from '../GlobalService'
import config from '@/common/config'

let instance = null

/**
 * 下载相关api
 */

const prefix = 'download'

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
   * 安全预警数据
   * @returns {Promise<*>}
   */
  downloadWarn = async (modal) => {
    const query = this.o2query(modal)
    location.href = `${config.baseUrl}${prefix}/warn?${query}`
  }

  /**
   * 车辆效应数据
   * @returns {Promise<*>}
   */
  downloadEff = async (modal) => {
    const query = this.o2query(modal)
    location.href = `${config.baseUrl}${prefix}/eff?${query}`
  }

  /**
   * 车辆效应数据
   * @returns {Promise<*>}
   */
  getListEff = async (modal) => {
    return this.post(`${prefix}/effPage`, modal)
  }
}

export default Service.getInstance()
