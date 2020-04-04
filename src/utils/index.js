const getRequiredRole = (label) => ({ required: true, message: `请输入${label}`, trigger: ['blur', 'change'] })

export const configMaker = config => {
  const { columns } = config
  const form = {}
  const formColumns = columns.filter(e => !e.notForm).map(e => {
    const rules = []
    e.required && rules.push(getRequiredRole(e.label))
    e.rules = rules
    form[e.value] = ''
    return e
  })
  return {
    ...config,
    tableColumns: columns.filter(e => !e.notTable),
    searchColumns: columns.filter(e => e.inSearch),
    formColumns,
    form,
  }
}
