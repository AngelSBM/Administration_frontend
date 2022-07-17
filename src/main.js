import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Notifications from 'vue-notification'
 
/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/
 
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
