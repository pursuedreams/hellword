<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="specified-scope">
		{{content}}
		<h1>APP</h1>
		<p>info: {{info}}</p>
		<div class="a">1000000</div>


		<div  @click="download">下载</div>
	</div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import * as Types from '@/store/types'
import {get} from '@/api/api'
import Qs from 'qs'
import Moment from 'moment'

export default {
	name: '',
	data() {
		return {
			content: 'Template page: index.vue',
			info: [],
			params: {
				ent: undefined,
				station: undefined,
				month: Moment(),
			},
		};
	},
	computed: {
		// ...mapGetters({InfoData: Types.DEMO_A})
	},
    created() {
		// console.log(this.$store.state)
        // this.changename();
		// console.log(Types.DEMO_A, "Types.DEMO_A");
        // this.$store.dispatch(Types.DEMO_A);
    },
  mounted() {
	// this.getList();
	// this.postpdf()
	this.addtest(1,2);

	this.arrTrans(2,[1,2,3,4,5]);
	
	},
  methods: {
	arrTrans(num, arr) {
		const iconsArr = []; // 声明数组
		arr.forEach((item, index) => {
			const page = Math.floor(index / num); // 计算该元素为第几个数组内
			if (!iconsArr[page]) { // 判断是否存在
				iconsArr[page] = [];
			}
			console.log(index / num,page, "pagepagepagepage")
			iconsArr[page].push(item);
		});
		console.log(iconsArr, "iconsArr")
		return iconsArr;
	},

	changename() {
		// this.$store.commit('showpeople', this.content)
		// console.log(this.$store.state.name, "测试")
	},
    addtest(num1,num2) {
		let num = num1+num2;
		if(num2+1>5){
			console.log(num);
			return num;
		}else{
			console.log(num,num2+1);
			return this.addtest(num,num2+1)
		}
    },
	getList() {
		get({
			url: '/api/try/ajax/json_demo.json',
			data: {
				'test' : 'ceshi'
			}
		})
		.then((res) => {
			this.info = res
			console.log(res)
		})
		.catch(err => console.log(err))
	},
	download() {
		const param = {
			companyId: 111,
			companyName: 'hhhhhh',
			stationId: 111,
			stationName: '111111111111111',
			month: '20201224',
		}
		const url = `${window.location.origin}/energyUsePdf?${Qs.stringify(param)}`
		get({
			url: '/egg-export/api/export/pdf',
			data: {
				exportUrl: url,
				width: 910,
				height: 1287,
				timestamp: new Date().valueOf(),
				storage: {
				'pro__Access-Token': localStorage['pro__Access-Token'],
				'pro__current_companyId': localStorage['pro__current_companyId'],
				},
			}
		})
		.then((res) => {
			console.log(res, '调用pdf成功')
			window.open(`/egg-export${url.path}?export-name=${url.name}.pdf`)
		})
		.catch(err => console.log(err))
	}
  }
};
</script>

<style lang="scss">
.specified-scope {
	.a{
		width: 0;
		height: 0;
		border-width: 100px;
		border-style: solid;
		border-color: #47a767 #0099CC #4b4287 #874268;
		/*transform: rotate(90deg); !*顺时针旋转90°*!*/
	}
}
</style>
