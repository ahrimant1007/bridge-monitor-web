const institutionSave = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'institutionId': 10001, // 单位id
    'institutionCode': 'xxxxx', // 单位编码
    'institutionName': '百分点', // 单位名称
    'institutionDesc': 'xxxxx' // 单位描述
  },
  'msg': '修改单位信息成功' // 失败：修改单位信息失败，请稍后再试
}

const institutionList = {
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

const institutionDel = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '修改单位信息成功' // 失败：单位编码已存在，请修改后再试
}

const institutionAdd = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'institutionId': 10001, // 单位id
    'institutionCode': 'xxxxx', // 单位编码
    'institutionName': '百分点', // 单位名称
    'institutionDesc': 'xxxxx' // 单位描述
  },
  'msg': '修改单位信息成功' // 失败：单位编码已存在，请修改后再试
}

const institutionDetail = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'institutionId': 10001, // 单位id
    'institutionCode': 'xxxxx', // 单位编码
    'institutionName': '百分点', // 单位名称
    'institutionDesc': 'xxxxx' // 单位描述
  },
  'msg': '查询桥梁详情成功' // 失败：查询桥梁详情失败，请稍后再试
}

export default {
  'post|/mock/sys/institution/save': institutionSave,
  'post|/mock/sys/institution/add': institutionAdd,
  'post|/mock/sys/institution/list': institutionList,
  'post|/mock/sys/institution/delete': institutionDel,
  'post|/mock/sys/institution/detail': institutionDetail,
}
