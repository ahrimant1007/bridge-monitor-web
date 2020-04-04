import service from '@/services/modules/sensor'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '/main/sensor',
  codeKey: 'sensorId',
  service,
  columns: [
    { value: 'bridgeId', label: '桥梁编号', inSearch: true, notTable: true, notForm: true, },
    { value: 'sensorNo', label: '编号' },
    { value: 'sensorShowNo', label: '显示编号' },
    { value: 'captureFrequency', label: '频率' },
    { value: 'yellowWarningValue', label: '黄色预警值', type: TYPE_ENUM.NUMBER },
    { value: 'orangeWarningValue', label: '橙色预警值', type: TYPE_ENUM.NUMBER },
  ],
  actions: ['add', 'edit', 'del'],
})
