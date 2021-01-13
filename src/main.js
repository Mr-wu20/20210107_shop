// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import './filters'

import loading from './common/imgs/loading.gif'

import './mock/mockServer' // 加载mockServer运行

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyLoad, {
  loading
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
