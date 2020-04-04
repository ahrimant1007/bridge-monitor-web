import CrudService from '../CrudService'

let instance = null

const prefix = 'sys/user'

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
