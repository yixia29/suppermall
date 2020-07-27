import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from "components/common/toast"

import { request } from './network/request.js'
Vue.config.productionTip = false
    //添加事件总线对象
Vue.prototype.$bus = new Vue()
    //安装toast插件
Vue.use(toast)
    //用fastclick解决移动端300ms延迟的问题
FastClick.attach(document.body)
    //使用图片懒加载的插件
Vue.use(VueLazyLoad, {
    loading: require('./assets/load.png')
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



request({
    url: '/home/multidata'
}).then(res => {
    // console.log(res);
}).catch(err => {
    // console.log(err);

})