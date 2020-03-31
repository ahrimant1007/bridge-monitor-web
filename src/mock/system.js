const loginSuccess = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'id': 1, // ID
    'userName': 'hupc', // 用户名
    'realName': '扈鹏程', // 姓名
    'passwd': '' // 密码
  },
  'msg': '登录成功'
}

const logout = {
  'code': '0', // 0表示成功，1表示失败
  'data': true, // true-成功，false-失败
  'msg': '注销成功' // 失败：注销登录失败，请稍后再试
}

const detail = {
  'code': '0', // 0表示成功，1表示失败
  'data': {
    'id': 1, // id
    'userName': 'hupc', // 用户名
    'realName': '扈鹏程', // 姓名
    'institutionId': 'bfd', // 单位ID
    'institutionName': '百分点', // 单位名称
    'createUser': 'xxx', // 创建人
    'createTime': 1584253204, // 创建时间，显示：yyyy年MM月dd日 HH:mm:ss
    'updateUser': 'xxx', // 创建人
    'updateTime': 1584253204 // 创建时间，显示：yyyy年MM月dd日 HH:mm:ss
  },
  'msg': '用户详情获取成功'
}

const checkNameUnique = {
  'code': '0', // 0表示成功，1表示失败
  'data': true, // true-可用，false-不可用
  'msg': '用户名可以使用' // 失败：用户名重复
}

export default {
  'post|/mock/login': loginSuccess,
  'post|/mock/logout': logout,
  'post|/mock/user/detail': detail,
  'post|/mock/user/checkNameUnique': checkNameUnique,
  'post|/mock/sys/user/sys/user/detail': detail,
}
