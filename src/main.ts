// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'

import '@sass/common.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
const v = new Vue({
  el: '#app',
  router
})
