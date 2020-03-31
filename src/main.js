import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import moment from 'moment'
moment.locale('zh-cn')
// import config from '@/common/config';
// console.log(config);

import './mock';
import 'element-ui/lib/theme-chalk/index.css'
import './app.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
