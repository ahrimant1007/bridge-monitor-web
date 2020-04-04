import CrudService from '../CrudService'

let instance = null

const prefix = 'sys/bridge'

class Service extends CrudService {
  constructor() {
    super(prefix)
    this.getListPath = `${this.path}/listSensor`
    this.updatePath = `${this.path}/saveSensor`
    this.getItemPath = `${this.path}/sensorDetail`
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
