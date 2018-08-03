import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/iconfont'
import './assets/styl/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
