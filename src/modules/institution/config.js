import moment from 'moment'
import service from '@/services/modules/institution'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '/main/institution',
  codeKey: 'institutionId',
  service,
  columns: [
    { value: 'name', label: '单位名称', inSearch: true, notTable: true, notForm: true, },
    { value: 'institutionName', label: '名称', width: '200px', align: 'center', required: true },
    { value: 'institutionDesc', label: '描述', notTable: false, type: TYPE_ENUM.TEXT_AREA },
    {
      value: 'createTime',
      label: '创建时间',
      notForm: true,
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
  ],
  actions: ['add', 'edit', 'del'],
})

