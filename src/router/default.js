export default [
  {
    path: '/home',
    name: '门户',
    meta: {
      title: '门户'
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/main',
    name: '首页',
    redirect: '/main/base',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/main/Layout.vue'),
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/403',
    component: () => import('@/views/error/403.vue')
  },
  {
    path: '1*',
    redirect: '/404',
  },
]
