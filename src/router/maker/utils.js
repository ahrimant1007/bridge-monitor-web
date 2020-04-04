

const modulesRootPath = 'views/main/modules'

export const makeRouter = (module, fileName = 'index', meta = {}) => {
  const { path, title, name, crud, hasChild, childModule, isChild, sub } = module
  const componentPath = `${modulesRootPath}/${name}/${fileName}`
  // console.log('注册路由 组件路径:', componentPath)
  const mo = {
    path: path,
    name: title,
    meta: {
      title: title,
      ...meta,
    },
    component: `_import(${componentPath})`,
  }
  const children = []
  if (crud) {
    mo.redirect = `${mo.path}/list`
    const selectModule = { path: `${mo.path}/list`, title: title + '-列表', name }
    children.push(makeRouter(selectModule, 'list'))
    const addModule = { path: `${mo.path}/add`, title: title + '-新增', name }
    children.push(makeRouter(addModule, 'form', { formType: 'add' }))
    const editModule = { path: `${mo.path}/edit/:${isChild ? 'child_id' : 'id'}`, title: title + '-编辑', name }
    children.push(makeRouter(editModule, 'form', { formType: 'edit' }))
  }
  if (hasChild && childModule) {
    const module = {
      ...childModule,
      path: `${path}/:id/child`,
      title: childModule.title,
      name: `${name}/${childModule.name}`,
      isChild: true,
    }
    children.push(makeRouter(module, 'index'))
  }
  if (sub && sub.length) {
    sub.forEach(subModule => {
      const module = {
        ...subModule,
        path: `${path}/${subModule.name}`,
        title: subModule.title,
        name: `${name}/${subModule.name}`,
        isChild: true,
      }
      children.push(makeRouter(module))
    })
  }
  mo.children = children
  return mo
}
