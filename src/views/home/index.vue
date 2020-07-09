<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="specified-scope">
		{{content}}
		<h1>APP</h1>
		<p>info: {{info}}</p>
	</div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import * as Types from '@/store/types'
import {get} from '@/api/api'

export default {
	name: '',
	data() {
		return {
			content: 'Template page: index.vue',
			info: []
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
    this.getList();
  },
  methods: {
	changename() {
		// this.$store.commit('showpeople', this.content)
		// console.log(this.$store.state.name, "测试")
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
	}
  }
};
</script>

<style>
.specified-scope {}
</style>
