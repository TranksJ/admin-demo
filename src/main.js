import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/comm.css'
import * as Service from './plugins/request.js'
Vue.prototype.$http=Service;
Vue.config.productionTip = false 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
