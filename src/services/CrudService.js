import GlobalService from './GlobalService'

export default class extends GlobalService {
  constructor(path = '') {
    super()
    this.path = path
    this.getListPath = `${this.path}/list`
    this.addPath = `${this.path}/add`
    this.deletePath = `${this.path}/delete`
    this.updatePath = `${this.path}/save`
    this.getItemPath = `${this.path}/detail`
  }

  /**
   * 获取列表
   * @param model
   * @returns {Promise<*>}
   */
  getList = async (model) => {
    return this.post(this.getListPath, model)
  }

  /**
   * 获取明细
   * @param id
   * @returns {Promise<*>}
   */
  getItem = async (id) => {
    return this.post(`${this.getItemPath}/${id}`)
  }

  /**
   * 新增
   * @param model
   * @returns {Promise<*>}
   */
  addItem = async (model) => {
    return this.post(this.addPath, model)
  }

  /**
   * 编辑
   * @param model object
   * @returns {Promise<*>}
   */
  editItem = async (model) => {
    return this.post(this.updatePath, model)
  }

  /**
   * 删除
   * @param id
   * @returns {Promise<*>}
   */
  delItem = async (id) => {
    return this.post(`${this.deletePath}/${id}`)
  }
}
