// import moment from 'moment'
// import { TYPE_ENUM } from '@/components/cc-constants/constants'
import service from '@/services/modules/bridge'
import { configMaker } from '@/utils'

export const config = configMaker({
  frontendUrl: '/main/bridge',
  codeKey: 'bridgeId',
  service,
  columns: [
    { value: 'name', label: '桥梁名称', inSearch: true, notTable: true, notForm: true, },
    { value: 'bridgeNo', label: '桥梁编号', required: true, notForm: true},
    { value: 'bridgeName', label: '桥梁名称', required: true},
    { value: 'length', label: '桥梁全长', span: 12, notTable: true },
    { value: 'width', label: '桥梁宽度', span: 12, notTable: true },
    { value: 'combination', label: '桥梁组合', notTable: true },
    { value: 'combination2', label: '桥跨组合', notTable: true },
    { value: 'load', label: '桥梁荷载', notTable: true },
    { value: 'curveRadius', label: '竖曲线半径', notTable: true },
    { value: 'deckSlope', label: '桥面横坡', notTable: true },
    { value: 'antiSeismicLevel', label: '抗震等级', span: 12, notTable: true },
    { value: 'navigabilityLevel', label: '通航等级', span: 12, notTable: true },
    { value: 'floodFrequency', label: '设计洪水频率', notTable: true },
    { value: 'windSpeed', label: '设计风速', notTable: true },
    { value: 'imgUrl', label: '图片URL', notForm: true, notTable: true },
    { value: 'pointUrl', label: '测点布设图', notForm: true, notTable: true },
  ],
  actions: ['edit', { text: '传感器', action: 'sensor', classname: 'info' }],
})

