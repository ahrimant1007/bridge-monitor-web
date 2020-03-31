import service from '@/services/modules/institution'

export const config = {
  frontendUrl: '/main/institution',
  service,
  columns: [
    { value: 'institutionName', label: '名称', width: '200px', align: 'left' },
    { value: 'institutionDesc', label: '描述' },
    { value: 'createTime', label: '创建时间' },
  ],
  actions: ['add', 'edit', 'del'],
}
