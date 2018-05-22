// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import store from './store/index'

// 引入第三方组件库
import '@components/ThirdParty/elementUI'

import '@sass/common.scss'

// 引入Vue国际化翻译
import i18n from '@/i18n/i18n'

// 引入自定义ts文件：web storage
import '@methods/storage'

Vue.config.productionTip = false

import VFooter from '@components/Footer/footer.vue';
Vue.component('VFooter', VFooter);

/* eslint-disable no-new */
const v = new Vue({
  el: '#app',
  i18n,
  router,
  store
})
