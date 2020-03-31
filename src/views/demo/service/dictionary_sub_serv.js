import CrudService from '@/services/CrudService'
import config from '@/common/config'

const path = `${config.baseUrl}/sysconfig`
let instance

class DictionaryServer extends CrudService {
  constructor() {
    super(path)
    return instance || this
  }

  static getInstance() {
    if (!instance) {
      instance = new DictionaryServer()
    }
    return instance
  }
}

export default DictionaryServer.getInstance()
