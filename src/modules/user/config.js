import service from '@/services/modules/user'
import dim from '@/services/dim'
import moment from 'moment'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '../../utils'

export const config = configMaker({
  frontendUrl: '/main/user',
  service,
  columns: [
    { value: 'name', label: '用户名/姓名', inSearch: true, notTable: true, notForm: true },
    { value: 'userName', label: '用户名', align: 'center', required: true },
    { value: 'realName', label: '姓名', align: 'center', required: true },
    {
      value: 'institutionId',
      label: '单位',
      notTable: true,
      required: true,
      type: TYPE_ENUM.SELECT,
      service: dim.getInstitutions
    },
    { value: 'institutionName', label: '单位名称', notForm: true },
    { value: 'passwd', label: '密码', notTable: true, type: TYPE_ENUM.PASSWORD, required: true },
    //
    { value: 'createUser', label: '创建人', notForm: true },
    {
      value: 'createTime',
      label: '创建时间',
      notForm: true,
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
  ],
  actions: ['add', 'edit', 'del'],
})

