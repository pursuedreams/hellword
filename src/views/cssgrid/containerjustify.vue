<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="container-justify">
        <div class="container">
            <div class="item" v-for="(item, index) in  9" :key="index">
				{{index}}
			</div>
        </div>

		<span>
            11111111111111111
        </span>
	</div>
</template>

<script>
export default {
	name: 'containerjustify',
	data() {
		return {
			content: 'other page'
		};
	}
};
</script>

<style lang="scss" scoped>
.container-justify {
	.container{
		display: grid;
		grid-template-columns: 80px 150px 150px;
		grid-template-rows: 50px 200px 80px;
		// justify-items: center ;
		// align-items: center;

		justify-content:  center ;
		align-content: start ;  


		.item {
			border:1px solid #000;
		}
	}
}
</style>
