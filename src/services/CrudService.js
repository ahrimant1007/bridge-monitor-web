import GlobalService from './GlobalService'

export default class extends GlobalService {
  constructor(path = '') {
    super();
    this.path = path
    this.getListPath = `${this.path}/list`
    this.addPath = `${this.path}/add`
    this.deletePath = `${this.path}/delete`
    this.updatePath = `${this.path}/update`
    this.getItemPath = `${this.path}/detail`
  }

  /**
   * 获取列表
   * @param model
   * @returns {Promise<*>}
   */
  getList = async (model) => {
    return this.post({ url: this.getListPath, model })
  }

  /**
   * 获取明细
   * @param id
   * @returns {Promise<*>}
   */
  getItem = async (id) => {
    return this.post({ url: this.getItemPath, model: { id } })
  }

  /**
   * 新增
   * @param model
   * @returns {Promise<*>}
   */
  addItem = async (model) => {
    return this.post({ url: this.addPath, model })
  }

  /**
   * 编辑
   * @param id
   * @param model object
   * @returns {Promise<*>}
   */
  editItem = async (id, model) => {
    const m = { id, ...model }
    return this.post({ url: this.updatePath, model: m })
  }

  /**
   * 删除
   * @param id
   * @returns {Promise<*>}
   */
  delItem = async (id) => {
    return this.post({ url: this.deletePath, model: { id } })
  }
}
