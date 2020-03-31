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
   * demo 获取数据
   * @returns {Promise<*>}
   */
  getDataList = async (resourceName) => {
    // return this.get(`resourceName`);
    return Array(15).fill(1).map((e, i) =>
      ({
        name: 'name_' + Math.round(Math.random() * 1000),
        name1: Math.round(Math.random() * 1000000),
        name2: Math.round(Math.random() * 1000000),
        name3: Math.round(Math.random() * 1000000),
        name4: Math.round(Math.random() * 1000000) + 'a',
      })
    )
  }
}

export default Service.getInstance()
