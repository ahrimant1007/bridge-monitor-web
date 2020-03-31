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
    return this.post(`${prefix}/bridgeSensors`)
  }

  /**
   * 安全预警
   * @param sensorNo
   * @param warnLevel 预警等级，（橙色预警，黄色预警）
   * @param startTime
   * @param endTime
   * @param pageNo
   * @param pageSize
   * @returns {Promise<*>}
   */
  getWarnList = async (
    {
      sensorNo, warnLevel,
      startTime, endTime,
      pageNo, pageSize
    }) => {
    const body = {
      sensorNo, warnLevel,
      startTime, endTime,
      pageNo, pageSize
    }
    return this.post(`${prefix}/warn`, body)
  }

  /**
   * 历史曲线
   * @param sensorNo
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  historyCurve = async ({ sensorNo, startTime, endTime }) => {
    const body = { sensorNo, startTime, endTime }
    return this.post(`${prefix}/historyCurve`, body)
  }

  /**
   * 实时曲线
   * @param sensorId 传感器ID
   * @param seconds 获取截止时间前seconds秒的数据
   * @param endTime 截止时间
   * @returns {Promise<*>}
   */
  realTimeCurve = async ({ sensorId, seconds, endTime }) => {
    const body = { sensorId, seconds, endTime }
    return this.post(`${prefix}/realTimeCurve`, body)
  }

  /**
   * 车辆效应
   * @param sensorNo
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  realTimeCurveEff = async ({ sensorNo, startTime, endTime }) => {
    const body = { sensorNo, startTime, endTime }
    return this.post(`${prefix}/realTimeCurveEff`, body)
  }

  /**
   * 车辆效应历史曲线
   * @param sensorNo
   * @param startTime
   * @param endTime
   * @returns {Promise<*>}
   */
  historyCurveEff = async ({ sensorNo, startTime, endTime }) => {
    const body = { sensorNo, startTime, endTime }
    return this.post(`${prefix}/historyCurveEff`, body)
  }

}

export default Service.getInstance()
