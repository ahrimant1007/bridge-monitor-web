import GlobalService from '../GlobalService'

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
   * @param sensorNo 传感器编号
   * @param warnLevel 预警等级
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  downloadWarn = async ({ sensorNo, warnLevel, startTime, endTime }) => {
    const body = { sensorNo, warnLevel, startTime, endTime, }
    return this.post(`${prefix}/warn`, body)
  }

  /**
   * 车辆效应数据
   * @param sensorNo  传感器编号
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  downloadEff = async ({ sensorNo, startTime, endTime }) => {
    const body = { sensorNo, startTime, endTime, }
    return this.post(`${prefix}/eff`, body)
  }
}

export default Service.getInstance()
