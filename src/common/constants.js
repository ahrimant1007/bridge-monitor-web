export const whiteList = [
  '/login', '/home',
  '/404', '/403',
  '/main/system',
  '/main/system/password',
  '/main/system/detail',
]

export const APP_COLORS = {
  BLUE: '#007bff',
  INDIGO: '#6610f2',
  PURPLE: '#6f42c1',
  PINK: '#e83e8c',
  RED: '#dc3545',
  ORANGE: '#fd7e14',
  YELLOW: '#ffc107',
  GREEN: '#28a745',
  TEAL: '#20c997',
  CYAN: '#17a2b8',
  WHITE: '#ffffff',
  GRAY: '#6c757d',
  GRAY_DARK: '#343a40',
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',

  SUCCESS: '#28a745',
  INFO: '#17a2b8',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
}

const modules = {
  baseInfo: {
    key: 1,
    bgColor: APP_COLORS.PRIMARY,
    color: APP_COLORS.LIGHT,
    title: '桥梁信息',
    name: 'baseInfo',
    subTitle: 'bridge baseInfo',
    icon: 'el-icon-s-home',
    path: '/main/base'
  },
  monitor: {
    key: 1,
    bgColor: APP_COLORS.RED,
    color: APP_COLORS.LIGHT,
    title: '实时监测',
    name: 'monitor',
    subTitle: 'realtime monitoring',
    icon: 'el-icon-monitor',
    path: '/main/monitor'
  },
  bridge: {
    key: 5,
    bgColor: APP_COLORS.ORANGE,
    color: APP_COLORS.LIGHT,
    title: '桥梁管理',
    name: 'bridge',
    subTitle: 'bridge manage',
    icon: 'el-icon-s-operation',
    path: '/main/bridge',
    crud: true,
    hasChild: true,
  },
  institution: {
    key: 7,
    bgColor: APP_COLORS.TEAL,
    color: APP_COLORS.GRAY_DARK,
    title: '单位管理',
    name: 'institution',
    subTitle: 'institution manage',
    icon: 'el-icon-school',
    path: '/main/institution',
    crud: true,
  },
  user: {
    key: 8,
    bgColor: APP_COLORS.BLUE,
    color: APP_COLORS.LIGHT,
    title: '用户管理',
    name: 'user',
    subTitle: 'user settings',
    icon: 'el-icon-user',
    path: '/main/user',
    crud: true,
  },
  role: {
    key: 9,
    bgColor: APP_COLORS.PINK,
    color: APP_COLORS.LIGHT,
    title: '角色管理',
    name: 'role',
    subTitle: 'role settings',
    icon: 'el-icon-s-check',
    path: '/main/role',
    crud: true,
  },
  download: {
    key: 4,
    bgColor: APP_COLORS.GREEN,
    color: APP_COLORS.LIGHT,
    title: '数据下载',
    name: 'download',
    subTitle: 'data download',
    icon: 'el-icon-download',
    path: '/main/download',
    sub: [
      {
        key: 41,
        path: '/main/download/warn',
        name: 'warn',
        title: '安全预警数据下载',
      },
      {
        key: 42,
        name: 'eff',
        path: '/main/download/eff',
        title: '车辆效应数据下载',
      },
    ]
  },
  system: {
    key: 16,
    bgColor: APP_COLORS.CYAN,
    color: APP_COLORS.LIGHT,
    title: '系统设置',
    name: 'system',
    subTitle: 'system config',
    icon: 'el-icon-setting',
    path: '/main/system',
    headerNav: true,
    sub: [
      {
        key: 161,
        name: 'detail',
        path: '/main/system/detail',
        title: '用户信息',
      },
      {
        key: 162,
        name: 'password',
        path: '/main/system/password',
        title: '修改密码',
      },
    ]
  },
}

export const allModules = Object.values(modules)
export const moduleConfigs = modules
