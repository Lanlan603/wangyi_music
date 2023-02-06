import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Vant库
import '@/plugins/vant'
// 引入base.css文件
import '@/assets/css/base.css'
// api接口
import api from '@/api/index'
// 将api挂载到Vue全局
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
