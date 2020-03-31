import router from './router'
import { whiteList } from '@/common/constants'
import tokenUtils from '@/utils/token'
// import store from '../store';

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const token = tokenUtils.getToken()
  if (token) {
    next()
  } else {
    if (!whiteList.includes(to.path)) {
      router.push({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  // console.log('after')
})
