import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRouter from './default'
import moduleRoutes from './modules';

Vue.use(VueRouter)

const routes = defaultRouter

const main = routes.find(e => e.path === '/main')
main.children = moduleRoutes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
