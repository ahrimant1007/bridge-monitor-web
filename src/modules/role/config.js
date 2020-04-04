import moment from 'moment'
import service from '@/services/modules/role'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '/main/role',
  codeKey: 'roleId',
  service,
  columns: [
    { value: 'name', label: '角色名称', inSearch: true, notTable: true, notForm: true, },
    { value: 'roleName', label: '名称', align: 'center', required: true },
    {
      value: 'createTime',
      label: '创建时间',
      notForm: true,
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
  ],
  actions: [
    { text: '编辑菜单', action: 'menu', classname: 'info' },
    { text: '编辑用户', action: 'user', classname: 'success' },
    { text: '编辑桥梁', action: 'bridge', classname: 'warning' },
     'add', 'del'],
})

