import _import from '@/utils/_import'

export default [
  {
    'path': '/main/base',
    'name': '桥梁基本信息',
    'meta': { 'title': '桥梁基本信息' },
    'component': _import('modules/baseInfo/index'),
    'children': []
  },
  {
    'path': '/main/monitor',
    'name': '实时监测',
    'meta': { 'title': '实时监测' },
    'component': _import('modules/monitor/index'),
    'children': []
  }, {
    'path': '/main/bridge',
    'name': '桥梁管理',
    'meta': { 'title': '桥梁管理' },
    'component': _import('modules/bridge/index'),
    'redirect': '/main/bridge/list',
    'children': [
      {
        'path': '/main/bridge/list',
        'name': '桥梁管理-列表',
        'meta': { 'title': '桥梁管理-列表' },
        'component': _import('modules/bridge/list'),
        'children': []
      }, {
        'path': '/main/bridge/add',
        'name': '桥梁管理-新增',
        'meta': { 'title': '桥梁管理-新增', 'formType': 'add' },
        'component': _import('modules/bridge/form'),
        'children': []
      }, {
        'path': '/main/bridge/edit/:id',
        'name': '桥梁管理-编辑',
        'meta': { 'title': '桥梁管理-编辑', 'formType': 'edit' },
        'component': _import('modules/bridge/form'),
        'children': []
      }, {
        'path': '/main/bridge/:id/sensor',
        'name': '传感器管理',
        'meta': { 'title': '传感管理' },
        'component': _import('modules/bridge/sensor/index'),
        'redirect': '/main/bridge/:id/sensor/list',
        'children': [
          {
            'path': '/main/bridge/:id/sensor/list',
            'name': '传感器管理-列表',
            'meta': { 'title': '传感管理-列表' },
            'component': _import('modules/bridge/sensor/list'),
            'children': []
          }, {
            'path': '/main/bridge/:id/sensor/edit/:sid',
            'name': '传感器管理-编辑',
            'meta': { 'title': '传感管理-编辑', 'formType': 'edit' },
            'component': _import('modules/bridge/sensor/form'),
            'children': []
          }]
      }]
  }, {
    'path': '/main/institution',
    'name': '单位管理',
    'meta': { 'title': '单位管理' },
    'component': _import('modules/institution/index'),
    'redirect': '/main/institution/list',
    'children': [{
      'path': '/main/institution/list',
      'name': '单位管理-列表',
      'meta': { 'title': '单位管理-列表' },
      'component': _import('modules/institution/list'),
      'children': []
    }, {
      'path': '/main/institution/add',
      'name': '单位管理-新增',
      'meta': { 'title': '单位管理-新增', 'formType': 'add' },
      'component': _import('modules/institution/form'),
      'children': []
    }, {
      'path': '/main/institution/edit/:id',
      'name': '单位管理-编辑',
      'meta': { 'title': '单位管理-编辑', 'formType': 'edit' },
      'component': _import('modules/institution/form'),
      'children': []
    }]
  }, {
    'path': '/main/user',
    'name': '用户管理',
    'meta': { 'title': '用户管理' },
    'component': _import('modules/user/index'),
    'redirect': '/main/user/list',
    'children': [{
      'path': '/main/user/list',
      'name': '用户管理-列表',
      'meta': { 'title': '用户管理-列表' },
      'component': _import('modules/user/list'),
      'children': []
    }, {
      'path': '/main/user/add',
      'name': '用户管理-新增',
      'meta': { 'title': '用户管理-新增', 'formType': 'add' },
      'component': _import('modules/user/form'),
      'children': []
    }, {
      'path': '/main/user/edit/:id',
      'name': '用户管理-编辑',
      'meta': { 'title': '用户管理-编辑', 'formType': 'edit' },
      'component': _import('modules/user/form'),
      'children': []
    }]
  }, {
    'path': '/main/role',
    'name': '角色管理',
    'meta': { 'title': '角色管理' },
    'component': _import('modules/role/index'),
    'redirect': '/main/role/list',
    'children': [{
      'path': '/main/role/list',
      'name': '角色管理-列表',
      'meta': { 'title': '角色管理-列表' },
      'component': _import('modules/role/list'),
      'children': []
    }, {
      'path': '/main/role/add',
      'name': '角色管理-新增',
      'meta': { 'title': '角色管理-新增', 'formType': 'add' },
      'component': _import('modules/role/form'),
      'children': []
    }, {
      'path': '/main/role/edit/:id',
      'name': '角色管理-编辑',
      'meta': { 'title': '角色管理-编辑', 'formType': 'edit' },
      'component': _import('modules/role/form'),
      'children': []
    }]
  }, {
    'path': '/main/download',
    'name': '数据下载',
    'meta': { 'title': '数据下载' },
    'component': _import('modules/download/index'),
    'children': [{
      'path': '/main/download/warn',
      'name': '安全预警数据',
      'meta': { 'title': '安全预警数据', type: 'warn' },
      'component': _import('modules/download/warn'),
      'children': []
    }, {
      'path': '/main/download/eff',
      'name': '车辆效应数据',
      'meta': { 'title': '车辆效应数据', type: 'eff' },
      'component': _import('modules/download/eff'),
      'children': []
    }]
  }, {
    'path': '/main/system',
    'name': '系统设置',
    'meta': { 'title': '系统设置' },
    'component': _import('modules/system/index'),
    'children': [{
      'path': '/main/system/detail',
      'name': '用户信息',
      'meta': { 'title': '用户信息' },
      'component': _import('modules/system/detail/index'),
      'children': []
    }, {
      'path': '/main/system/password',
      'name': '修改密码',
      'meta': { 'title': '修改密码' },
      'component': _import('modules/system/password/index'),
      'children': []
    }]
  }]
