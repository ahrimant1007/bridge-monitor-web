import CrudService from '@/services/CrudService'
import config from '@/common/config'

const path = `${config.baseUrl}/sysconfig`
let instance

class ParameterService extends CrudService {
  constructor() {
    super(path)
    return instance || this
  }

  static getInstance() {
    if (!instance) {
      instance = new ParameterService()
    }
    return instance
  }
}

export default ParameterService.getInstance()
