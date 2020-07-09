// ------------------------------------------------------------------------------
// name: a
// ------------------------------------------------------------------------------

import Vue from 'vue';
import * as Types from '@/store/types';

const DEMO_A = Types.DEMO_A;

const State = () => ({
	listAData: []
});

const Getters = {
	[DEMO_A](state) {
		return state;
	}
};

// 同步立即更新
const Mutations = {

	// 按 scope 存储指定的列表数据
	[DEMO_A](state, data) {
		state.listAData = data;
	}
};

// 异步请求数据
const Actions = {
	// 请求订单评价规则
	[DEMO_A](context) {
		// const shopInfo = context.rootGetters[Types.MEMBER_SHOP];

		return Vue.http.post(
			'/member-user/memberUserEvaluate/queryUserEvaluateRule',
			{
				shopper_id: 550912
			}
		).then(({ data }) => {
			context.commit(DEMO_A, data.data);
			return Promise.resolve();
		});
	}

};

export default {
	namespaced: true,
	strict: true,
	state: State,
	getters: Getters,
	mutations: Mutations,
	actions: Actions
};
