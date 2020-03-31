import CrudService from '../CrudService'

let instance = null

const prefix = '/warn/user/'

class Service extends CrudService {
  constructor() {
    super(prefix)
    this.getListPath = `${this.path}/list`
    this.addPath = `${this.path}/add`
    this.deletePath = `${this.path}/delete`
    this.updatePath = `${this.path}/update`
    this.getItemPath = `${this.path}/detail`
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
