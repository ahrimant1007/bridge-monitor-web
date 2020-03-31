import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRouter from '../default'
import { moduleConfigs } from '@/common/constants'
import { makeRouter} from '@/router/maker/utils'

Vue.use(VueRouter)

const routes = defaultRouter

const moduleRoutes = Object.values(moduleConfigs).map(module => makeRouter(module));

const main = routes.find(e => e.path === '/main')
main.children = moduleRoutes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
