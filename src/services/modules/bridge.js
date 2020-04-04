import CrudService from '../CrudService'

let instance = null

/**
 * 桥梁 - 传感器相关
 */

const prefix = 'sys/bridge'

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
   * 上传点位图片
   * @param bridgeId
   * @param img blob
   * @returns {Promise<*>}
   */
  uploadPointImage = async (bridgeId, img) => {
    const formDate = this.o2formData({ bridgeId, img })
    return this.post(`${prefix}/savePointImg`, formDate)
  }

  /**
   * 上传桥梁图片
   * @param bridgeId
   * @param img blob
   * @returns {Promise<*>}
   */
  uploadImage = async (bridgeId, img) => {
    const formDate = this.o2formData({ bridgeId, img })
    return this.post(`${prefix}/saveImg`, formDate)
  }

}

export default Service.getInstance()
