import moment from 'moment'
import service from '@/services/modules/monitor'
import downloadService from '@/services/modules/download'
import { TYPE_ENUM } from '@/components/cc-constants/constants'
import { configMaker } from '@/utils'

export const warnConfig = configMaker({
  frontendUrl: '/main/warning',
  service: {
    getList: service.getWarnList,
    downloadData: downloadService.downloadWarn,
  },
  columns: [
    { value: 'sensorNo', label: '传感器显示编号' },
    {
      value: 'warningLevel',
      label: '报警等级',
    },
    {
      value: 'warningValue',
      label: '报警值',
    },
    {
      value: 'warningTime',
      label: '报警时间',
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      value: 'warnLevel',
      label: '报警等级',
      type: TYPE_ENUM.SELECT,
      inSearch: true,
      notTable: true,
      options: [
        { value: '橙色预警', label: '橙色预警' },
        { value: '黄色预警', label: '黄色预警' },
      ]
    },
    {
      value: '_',
      label: '报警时间',
      inSearch: true,
      notTable: true,
      type: TYPE_ENUM.DATE_RANGE,
      dateType: 'datetimerange'
    },
  ],
})

export const effConfig = configMaker({
  frontendUrl: '/main/eff',
  service: {
    getList: downloadService.getListEff,
    downloadData: downloadService.downloadEff,
  },
  columns: [
    {
      value: 'captureTime',
      label: '采集时间',
      render: (data, { property }) => moment(data[property]).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      value: 'captureValue',
      label: '采集值',
    },
    {
      value: '_',
      label: '采集时间',
      notTable: true,
      inSearch: true,
      type: TYPE_ENUM.DATE_RANGE,
      dateType: 'datetimerange'
    },
  ],
})

