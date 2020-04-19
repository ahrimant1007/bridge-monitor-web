import GlobalService from '../GlobalService'

/**
 * 实时监测
 */

let instance = null

const prefix = 'monitor'

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
   * 桥梁列表
   * @returns {Promise<*>}
   */
  getBridgeInfoList = async () => {
    return this.post(`${prefix}/bridgeInfo`)
  }

  /**
   * 桥梁传感器列表
   * @param bridgeId 桥梁Id
   * @returns {Promise<*>}
   */
  getBridgeSensorsList = async (bridgeId) => {
    return this.post(`${prefix}/bridgeSensors/${bridgeId}`)
  }

  /**
   * 安全预警
   * @param sensorNo
   * @param warnLevel 预警等级，（橙色预警，黄色预警）
   * @param startTime
   * @param endTime
   * @param currentPage
   * @param pageSize
   * @returns {Promise<*>}
   */
  getWarnList = async (
    {
      sensorId, warnLevel,
      startTime, endTime,
      currentPage, pageSize
    }) => {
    const body = {
      sensorId, warnLevel,
      startTime, endTime,
      currentPage, pageSize
    }
    return this.post(`${prefix}/warn`, body)
  }

  /**
   * 历史曲线
   * @param sensorId
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  historyCurve = async ({ sensorId, startTime, endTime }) => {
    const body = { sensorId, startTime, endTime }
    return this.post(`${prefix}/historyCurve`, body)
  }

  /**
   * 实时曲线
   * @param sensorId 传感器ID
   * @param seconds 获取截止时间前seconds秒的数据
   * @param endTime 截止时间
   * @returns {Promise<*>}
   */
  // realTimeCurve = async ({ sensorId, startTime, endTime }) => {
  //   const body = { sensorId, startTime, endTime }
  //   return this.post(`${prefix}/realTimeCurve`, body)
  // }

 /**
   * 实时曲线 - 全量
   * @param sensorId 传感器ID
   * @returns {Promise<*>}
   */
  realTimeCurveAll = async ({ sensorId }) => {
    // const body = { sensorId }
    return this.post(`${prefix}/realTimeCurveAll/${sensorId}`)
  }

  /**
   * 实时曲线 - 增量
   * @param sensorId 传感器ID
   * @returns {Promise<*>}
   */
  realTimeCurveStep = async ({ sensorId }) => {
    // const body = { sensorId }
    return this.post(`${prefix}/realTimeCurveStep/${sensorId}`)
  }

  /**
   * 车辆效应
   * @param sensorId
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  // realTimeCurveEff = async ({ sensorId, startTime, endTime }) => {
  //   const body = { sensorId, startTime, endTime }
  //   return this.post(`${prefix}/realTimeCurveEff`, body)
  // }

   /**
   * 车辆效应 - 全量
   * @param sensorId
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  realTimeCurveEffAll = async ({ sensorId }) => {
    return this.post(`${prefix}/realTimeCurveEffAll/${sensorId}`)
  }

   /**
   * 车辆效应 - 增量
   * @param sensorId
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  realTimeCurveEffStep = async ({ sensorId }) => {
    return this.post(`${prefix}/realTimeCurveEffStep/${sensorId}`)
  }

  /**
   * 车辆效应历史曲线
   * @param sensorId
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  historyCurveEff = async ({ sensorId, startTime, endTime }) => {
    const body = { sensorId, startTime, endTime }
    return this.post(`${prefix}/historyCurveEff`, body)
  }
}

export default Service.getInstance()
