const historyCurve = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    10.0,
    2.51
  ],
  'msg': '实时数据获取成功' // 失败：实时数据获取失败，请稍后再试
}

const warn = {
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
        'institutionId': 10001, // 单位id
        'institutionCode': 'xxxxx', // 单位id
        'institutionName': '百分点' // 单位名称
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
  'msg': '查询单位信息成功' // 失败：查询单位信息失败，请稍后再试
}

const realTimeCurve = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    10.0,
    2.51
  ],
  'msg': '实时数据获取成功' // 失败：实时数据获取失败，请稍后再试
}

const bridgeSensors = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    {
      'sensorId': 'XXXXXXXX', // 传感器id
      'sensorNo': '00010001', // 传感器编号
      'sensorShowNo': 'N-1-2/4', // 传感器显示编号
      'captureFrequency': 25, // 频率
      'yellowWarningValue': 1.2, // 黄色预警值
      'orangeWarningValue': 3.5 // 橙色预警值
    },
  ],
  'msg': '查询桥梁管理成功' // 失败：查询桥梁管理失败，请稍后再试
}

const bridgeInfo = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    {
      'bridgeId': 'xxx', // 桥梁id
      'bridgeNo': '身份证号', // 桥梁编号
      'bridgeName': '公安' // 桥梁名称
    },
  ],
  'msg': '查询桥梁列表成功' // 失败：查询桥梁列表失败，请稍后再试
}

const realTimeCurveEff = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    10.0,
    2.51
  ],
  'msg': '实时数据获取成功' // 失败：实时数据获取失败，请稍后再试
}

const historyCurveEff = {
  'code': '0', // 0表示成功，1表示失败
  'data': [
    10.0,
    2.51
  ],
  'msg': '实时数据获取成功' // 失败：实时数据获取失败，请稍后再试
}

export default {
  'post|/mock/sys/monitor/historyCurve': historyCurve,
  'post|/mock/sys/monitor/warn': warn,
  'post|/mock/sys/monitor/realTimeCurve': realTimeCurve,
  'post|/mock/sys/monitor/bridgeSensors': bridgeSensors,
  'post|/mock/sys/monitor/bridgeInfo': bridgeInfo,
  'post|/mock/sys/monitor/realTimeCurveEff': realTimeCurveEff,
  'post|/mock/sys/monitor/historyCurveEff': historyCurveEff,
}
