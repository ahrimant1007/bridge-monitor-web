const save = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '更新用户信息成功'
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
        'id': 1, // id
        'userName': 'hupc', // 用户名
        'realName': '扈鹏程', // 姓名
        'institutionId': 'bfd', // 单位ID
        'institutionName': '百分点', // 单位名称
        'creator': 'xxx', // 创建人
        'createTime': 1584253204, // 创建时间，显示：yyyy年MM月dd日 HH:mm:ss
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
const _delete = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '删除用户成功'
}
const add = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '更新用户信息成功' // 失败：用户名重复，请修改后重试
}
const detail = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'id': 1, // id
    'userName': 'hupc', // 用户名
    'realName': '扈鹏程', // 姓名
    'institutionId': 1, // 单位ID
    'institutionName': '百分点', // 单位名称
  },
  'msg': '查询桥梁管理成功' // 失败：查询桥梁管理失败，请稍后再试
}

const checkNameUnique = {
  'code': '0', // 0表示成功，1表示失败
  'data': true, // true-可用，false-不可用
  'msg': '用户名可以使用' // 失败：用户名重复
}

export default {
  'post|/mock/sys/user/save': save,
  'post|/mock/sys/user/list': list,
  'post|/mock/sys/user/delete': _delete,
  'post|/mock/sys/user/add': add,
  'post|/mock/sys/user/detail': detail,
  'post|/mock/sys/user/checkNameUnique': checkNameUnique,
}
