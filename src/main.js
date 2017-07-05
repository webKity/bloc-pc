// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import Tip from './components/frame/tip/tip.js'
import Dialog from './components/frame/dialog/dialog.js'
import Lodash from './components/util/lodash.js'
import Validata from './components/util/validata.js'
import store from './vuex/store.js'
import {formatDate} from './components/util/filters.js'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Tip)
Vue.use(Dialog)
Vue.use(Lodash)
Vue.use(Validata)
Vue.filter('formatDate', formatDate)

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
