import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/comm.css'
import { Service } from './plugins/request.js'
// import axios from 'axios'
// Vue.prototype.$axios = axios
Vue.prototype.$axios = Service
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
