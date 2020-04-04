import moment from 'moment'
import service from '@/services/modules/monitor'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '/main/warning',
  service: { getList: service.getWarnList },
  columns: [
    {
      value: 'sensorNo', label: '显示编号'
    },
    {
      value: 'warningTime',
      label: '报警时间',
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      value: 'warningValue',
      label: '报警值',
    },
    {
      value: 'warningLevel',
      label: '报警等级',
      type: TYPE_ENUM.SELECT,
      inSearch: true,
      options: [
        { value: '橙色预警', label: '橙色预警' },
        { value: '黄色预警', label: '黄色预警' },
      ]
    },
    { value: '_', label: '报警时间', inSearch: true, type: TYPE_ENUM.DATE_RANGE, dateType: 'datetimerange' },
  ],
})

