import parameterService from '../service/parameter_serv'
import dictionaryService from '../service/dictionary_serv'
import subDictionaryService from '../service/dictionary_sub_serv'
import { TYPE_ENUM } from '@/components/cc-searcher/constants'

export const parameterConfig = {
  frontendUrl: '/demo/parameter',
  service: parameterService,
  columns: [
    { value: 'name', label: '名称', width: '200px', align: 'left' },
    { value: 'code', label: '属性编码', render: (data, { property }) => data[property] },
    { value: 'value', label: '属性值' },
    { value: 'remark', label: '备注' },
    { value: 'createTime', label: '时间' },
  ],
  actions: ['add', 'edit', 'del'],
}


export const dictionaryConfig = {
  frontendUrl: '/demo/dictionary',
  childCodeKey: 'code',
  service: dictionaryService,
  columns: [
    { value: 'code', label: '节点编码' },
    { value: 'name', label: '名称' },
    { value: 'info', label: '描述' },
  ],
  actions: ['add', 'edit', 'child', 'del'],
  searchOptions: [
    { type: TYPE_ENUM.INPUT, value: 'code', label: '节点编码' },
    { type: TYPE_ENUM.INPUT, value: 'name', label: '名称' },
    { type: TYPE_ENUM.INPUT, value: 'info', label: '描述' },
  ]
}

export const subDictionaryConfig = {
  frontendUrl: '/demo/dictionary/:id/children',
  service: subDictionaryService,
  columns: [
    { value: 'code', label: '节点编码' },
    { value: 'name', label: '名称' },
    { value: 'info', label: '描述' },
    { value: 'orderNum', label: '排序' },
  ],
  actions: ['add', 'edit', 'del'],
  searchOptions: [
    { type: TYPE_ENUM.INPUT, value: 'code', label: '节点编码' },
    { type: TYPE_ENUM.INPUT, value: 'name', label: '名称' },
    { type: TYPE_ENUM.INPUT, value: 'info', label: '描述' },
  ]
}
