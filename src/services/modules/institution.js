import CrudService from '../CrudService'

/**
 * 单位相关接口
 */

let instance = null

const prefix = 'sys/institution'

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
}

export default Service.getInstance()
