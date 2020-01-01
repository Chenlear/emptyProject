// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import format from './common/format'
import http from './api/http'
import api from './api/api'
import VueLazyLoad from 'vue-lazyload'
import 'lib-flexible/flexible.js'
import 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import tagCloud from 'v-tag-cloud'
Vue.use(tagCloud)
// axios 二次封装
Vue.prototype.$http = http
// 统一接口
Vue.prototype.$api = api
// 转换时间
Vue.prototype.$format = format
Vue.use(VueLazyLoad,{
  error:'./static/default.png',
  loading:'./static/default.png',
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
