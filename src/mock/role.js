const excludeBridges = {
  'code': '0', // 0表示成功，1表示失败
  'data': [{
    'bridgeId': 'xxxx', // 桥梁ID
    'bridgeNo': '2131', // 桥梁编号
    'bridgeName': '潮白河大桥' // 桥梁名称
  }],
  'msg': '添加成功' // 失败：添加失败
}

const excludeUsers = {
  'code': '0', // 0表示成功，1表示失败
  'data': [{
    'userId': 111, // 用户ID
    'userName': 'hupc', // 用户名
    'realName': '扈鹏程' // 姓名
  }],
  'msg': '添加成功' // 失败：添加失败
}

const saveUsers = {
  'code': '000000',
  'data': '',
  'msg': '保存角色用户成功'
}

const saveMenus = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '更新菜单权限成功' // 失败：更新菜单权限失败
}

const saveBridges = {
  'code': '000000',
  'data': '',
  'msg': '保存角色桥梁成功'
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
        'roleId': 1, // 角色ID
        'roleName': '管理员', // 角色名称
        'creator': 'xxx', // 创建人
        'createTime': 1584253204, // 创建时间，显示：yyyy年MM月dd日 HH:mm:ss
        'updator': 'xxx', // 修改人
        'updateTime': 1584253204, // 创建时间，显示：yyyy年MM月dd日 HH:mm:ss
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
  'msg': '删除成功' // 失败：删除失败
}

const includeUsers = {
  'code': '0', // 0表示成功，1表示失败
  'data': [{
    'userId': 111, // 用户ID
    'userName': 'hupc', // 用户名
    'realName': '扈鹏程' // 姓名
  }],
  'msg': '添加成功' // 失败：添加失败
}

const checkUnique = {
  'code': '000000',
  'msg': '当前角色名可用',
  'data': true // true-可用，false-不可用
}

const includeBridges = {
  'code': '0', // 0表示成功，1表示失败
  'data': [{
    'bridgeId': 'xxxx', // 桥梁ID
    'bridgeNo': '2131', // 桥梁编号
    'bridgeName': '潮白河大桥' // 桥梁名称
  }],
  'msg': '添加成功' // 失败：添加失败
}

const add = {
  'code': '0', // 0表示成功，1表示失败
  'data': '',
  'msg': '添加成功' // 失败：添加失败
}

const includeMenus = {
  'code': '000000',
  'msg': '成功',
  'data': [{
    'id': 1, // 菜单ID
    'key': 'systemManage', // 菜单key，前端使用
    'desc': '系统管理', // 菜单描述
    'dataCode': 'SB506', // 菜单编码
    'value': '/systemManage', // 子URL
    'order': 6, // 排序号
    'parentId': '', // 父菜单ID
    'level': '1', // 层级
    'match': 1 // 是否具有权限，0-没有权限，1-有权限
  }]
}

export default {
  'post|/mock/sys/role/excludeBridges': excludeBridges,
  'post|/mock/sys/role/excludeUsers': excludeUsers,
  'post|/mock/sys/role/saveUsers': saveUsers,
  'post|/mock/sys/role/saveMenus': saveMenus,
  'post|/mock/sys/role/saveBridges': saveBridges,
  'post|/mock/sys/role/list': list,
  'post|/mock/sys/role/delete': _delete,
  'post|/mock/sys/role/includeUsers': includeUsers,
  'post|/mock/sys/role/checkUnique': checkUnique,
  'post|/mock/sys/role/includeBridges': includeBridges,
  'post|/mock/sys/role/add': add,
  'post|/mock/sys/role/includeMenus': includeMenus,
}
