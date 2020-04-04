import service from '@/services/modules/sensor'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '.',
  codeKey: 'sensorId',
  service,
  columns: [
    { value: 'sensorNo', label: '编号', required: true },
    { value: 'sensorShowNo', label: '显示编号', required: true },
    { value: 'captureFrequency', label: '频率' },
    { value: 'yellowWarningValue', label: '黄色预警值', type: TYPE_ENUM.NUMBER },
    { value: 'orangeWarningValue', label: '橙色预警值', type: TYPE_ENUM.NUMBER },
  ],
  actions: ['edit'],
})
