// ------------------------------------------------------------------------------
// name: store
// author: cxx
// created: 2020.07.08
// describe: 本地数据管理，Vuex是一个状态管理的插件，可以解决不同组件之间的数据共享和数据持久化他采用集中式存储管理应用的所有组件的状态。
// 					 这里的关键在于集中式存储管理。这意味着本来需要共享状态的更新是需要组件之间的通讯，而现在有了vuex，组件就都和store通讯了。
// 					 这也是为什么官网再次会提到Vuex构建大型应用的价值，如果你不打算开大大型的单页应用，使用Vuex可能会变得很繁琐，对于大型项目，
// 					 可以使用Vuex作为不同组件之间的状态管理，而对于小型的项目，推荐使用HTML5特有的属性，localStroage和sessionStroage作为数据之间的传递。
// ------------------------------------------------------------------------------
import Vue from 'vue'
import Vuex from 'vuex'

import * as Module from './types/module';

// 引入拆分出去的子模块
import moduleA from './modules/a'
import moduleB from './modules/b'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		name: '如花',
		age: '18'
	},
	modules: {
		[Module.A]: moduleA,
		[Module.B]: moduleB
	}
})

export default store
