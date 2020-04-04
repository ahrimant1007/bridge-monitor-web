import GlobalService from './GlobalService'

let instance = null

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

  getInstitutions = async () => {
    const list = await this.post('sys/user/getAllInstitution')
    return list.map(e => ({ value: e.institutionId, label: e.institutionName }))
  }
}

export default Service.getInstance()
