import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ----------------------------------------
// 启动入口组件
// ----------------------------------------
import App from './App.vue'

// ----------------------------------------
// 本地数据和路由
// ----------------------------------------
import router from '@/router'
import store from '@/store'


Vue.config.productionTip = false

import('@/css/reset.css')
import('@/vant')


// 进入主程序
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');

