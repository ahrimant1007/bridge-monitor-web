const saveSensor = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'sensorId': 'XXXXXXXX', //
    'sensorNo': '00010001', //
    'sensorShowNo': 'N-1-2/4', //
    'captureFrequency': 25, //
    'yellowWarningValue': 1.2, //
    'orangeWarningValue': 3.5 //
  },
  'msg': '修改成功' // 失败：修改失败
}

const listSensor = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'endRow': 10, // 当期页最后一行行号
    'firstPage': 1, // 第一页页号
    'hasNextPage': true, // 是否有下一页
    'hasPreviousPage': false, // 是否有上一页
    'isFirstPage': true, // 是否是第一页
    'isLastPage': false, // 是否是最后一页
    'lastPage': 2, // 最后一页页号
    'list': [
      {
        'sensorId': 'XXXXXXXX', // 传感器id
        'sensorNo': '00010001', // 传感器编号
        'sensorShowNo': 'N-1-2/4', // 传感器显示编号
        'captureFrequency': 25, // 频率
        'yellowWarningValue': 1.2, // 红色预警值
        'orangeWarningValue': 3.5 // 橙色预警值
      },
      {
        'sensorId': 'XXXXXXXA', // 传感器id
        'sensorNo': '00010001', // 传感器编号
        'sensorShowNo': 'N-1-2/5', // 传感器显示编号
        'captureFrequency': 25, // 频率
        'yellowWarningValue': 1.1, // 红色预警值
        'orangeWarningValue': 3.2 // 橙色预警值
      }
    ],
    'navigatePages': 8, // 导航页码数
    'navigatepageNums': [ // 导航页号
      1,
      2
    ],
    'nextPage': 2, // 下一页页号
    'pageNum': 1, // 当前页号
    'pageSize': 10, // 每页数量
    'pages': 2, // 总页数
    'prePage': 0, // 上一页页号
    'size': 10, // 当前页数量
    'startRow': 1, // 第一个元素行号
    'total': 15 // 总纪录数
  },
  'msg': '查询桥梁管理成功' // 失败：查询桥梁管理失败，请稍后再试
}

const deleteSensor = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '删除成功' // 失败：删除失败
}

const addSensor = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'sensorId': 'XXXXXXXX', //
    'sensorNo': '00010001', //
    'sensorShowNo': 'N-1-2/4', //
    'captureFrequency': 25, //
    'yellowWarningValue': 1.2, //
    'orangeWarningValue': 3.5 //
  },
  'msg': '添加成功' // 失败：添加失败
}
const save = {
  'code': '0', // 0表示成功，1表示失败
  'data': true, // true-可用，false-不可用
  'msg': '修改成功' // 失败：修改失败
}

const saveImg = {
  'code': '0', // 0表示成功，1表示失败
  'data': '/img/xxxxx.jpg',
  'msg': '修改成功' // 失败：修改失败
}

const list = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'endRow': 10, // 当期页最后一行行号
    'firstPage': 1, // 第一页页号
    'hasNextPage': true, // 是否有下一页
    'hasPreviousPage': false, // 是否有上一页
    'isFirstPage': true, // 是否是第一页
    'isLastPage': false, // 是否是最后一页
    'lastPage': 2, // 最后一页页号
    'list': [
      {
        'bridgeId': 'xxx', // 桥梁id
        'bridgeNo': '身份证号', // 桥梁编号
        'bridgeName': '公安' // 桥梁名称
      }
    ],
    'navigatePages': 8, // 导航页码数
    'navigatepageNums': [ // 导航页号
      1,
      2
    ],
    'nextPage': 2, // 下一页页号
    'pageNum': 1, // 当前页号
    'pageSize': 10, // 每页数量
    'pages': 2, // 总页数
    'prePage': 0, // 上一页页号
    'size': 10, // 当前页数量
    'startRow': 1, // 第一个元素行号
    'total': 15 // 总纪录数
  },
  'msg': '查询桥梁成功' // 失败：查询桥梁失败，请稍后再试
}

const detail = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'bridgeId': 'xxxx', // 桥梁ID
    'bridgeNo': '2131', // 桥梁编号
    'bridgeName': '潮白河大桥', // 桥梁名称
    'length': '180m', // 桥梁全长
    'combination': '', // 桥梁组合
    'width': '', // 桥梁宽度
    'combination2': '', // 桥跨组合
    'load': '', // 桥梁荷载
    'curveRadius': '', // 竖曲线半径
    'deckSlope': '', // 桥面横坡
    'antiSeismicLevel': '', // 抗震等级
    'floodFrequency': '', // 设计洪水频率
    'navigabilityLevel': '', // 通航等级
    'windSpeed': '', // 设计风速
    'imgUrl': '/img/xxxxxxxxxxxx.jpg' // 图片URL
  },
  'msg': '查询桥梁详情成功' // 失败：查询桥梁详情失败，请稍后再试
}

export default {
  'post|/mock/sys/bridge/saveSensor': saveSensor,
  'post|/mock/sys/bridge/listSensor': listSensor,
  'post|/mock/sys/bridge/deleteSensor': deleteSensor,
  'post|/mock/sys/bridge/addSensor': addSensor,
  'post|/mock/sys/bridge/save': save,
  'post|/mock/sys/bridge/saveImg': saveImg,
  'post|/mock/sys/bridge/list': list,
  'post|/mock/sys/bridge/detail': detail,
}
