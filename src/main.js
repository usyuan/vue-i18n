import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './assets/css/reset.css'
import './assets/css/style.scss'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$ = $;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
