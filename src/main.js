import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //’Ç‹L
import VueAxios from 'vue-axios' //’Ç‹L

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
