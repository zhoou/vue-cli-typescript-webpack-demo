import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

import { getLocalStorage } from '@methods/storage'

const messages = {
    en: {
      message: 'hello',
      welcome: 'Welcome to <mark>zhoou</mark> Vue.js App',
      ...enLocale 
    },
    zh: {
      message: '你好',
      welcome: '欢迎来到 <mark>zhoou</mark> Vue.js App',
      ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
    }
  }

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: getLocalStorage('language') || 'en', // set locale (or || window.navigator.language)
    messages, // set locale messages
})

// ElementLocale.i18n(key, value) => i18n.t(key, value))

export default i18n;