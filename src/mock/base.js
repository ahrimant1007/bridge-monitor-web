const list = {
  'code': '000000',
  'data': {
    'endRow': 2,
    'firstPage': 1,
    'hasNextPage': false,
    'hasPreviousPage': false,
    'isFirstPage': true,
    'isLastPage': true,
    'lastPage': 1,
    'list': [
      {
        'bridgeId': 'fdbb32dab408438180b384e2defcbf07',
        'bridgeName': '测试1号桥梁',
        'bridgeNo': '001'
      },
      {
        'bridgeId': 'dfdb4b052283417ea36e1034563d122f',
        'bridgeName': '测试1号桥梁2',
        'bridgeNo': '001'
      }
    ],
    'navigateFirstPage': 1,
    'navigateLastPage': 1,
    'navigatePages': 8,
    'navigatepageNums': [
      1
    ],
    'nextPage': 0,
    'pageNum': 1,
    'pageSize': 10,
    'pages': 1,
    'prePage': 0,
    'size': 2,
    'startRow': 1,
    'total': 2
  },
  'msg': 'success'
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
  'post|/mock/baseInfo/list': list,
  'post|/mock/baseInfo/detail': detail,
}
