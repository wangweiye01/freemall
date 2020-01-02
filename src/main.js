import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/base.css'
import './assets/css/index.css'
import store from './store'

Vue.use(VueAxios,axios);

// 是否需要开启信息提示
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
