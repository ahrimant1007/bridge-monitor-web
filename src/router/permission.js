import router from './router'
import { whiteList } from '@/common/constants'
import tokenUtils from '@/utils/token'
import store from '../store'

const getPermissionMenus = async () => {
  return await store.dispatch('getPermissionList')
}

const checkPath = (path, menus) => {
  const isCheck = menus.some(menu => path.startsWith(menu.path))
  if (!isCheck) {
    console.log(path, 'is not permission')
  }
  return isCheck
}

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const token = tokenUtils.getToken()
  if (token) {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      let menus = store.getters.permissionMenus
      if (!menus.length) {
        menus = await getPermissionMenus()
      }
      if (checkPath(to.path, menus)) {
        next()
      } else {
        next('/403')
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      router.push({ path: '/login' })
    }
  }
})

router.afterEach(() => {
  // console.log('after')
})
