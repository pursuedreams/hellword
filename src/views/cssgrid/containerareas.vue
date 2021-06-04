<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="container-areas">
        <div class="container">
            <div class="item item-a">header</div>
			<div class="item item-b">sidebarleft</div>
			<div class="item item-c">main</div>
			<div class="item item-d">sidebarright</div>
			<div class="item item-e">footer</div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'containerareas',
	data() {
		return {
			content: 'other page'
		};
	}
};
</script>

<style lang="scss" scoped>
.container-areas {
	.item-a{
		grid-area: header;
	}
	.item-b{
		grid-area: sidebarleft;
	}
	.item-c {
		grid-area: main;
	}
	.item-d {
		grid-area: sidebarright;
	}
	.item-e {
		grid-area: footer;
	}
	.container{
		display: grid;
		grid-template-columns: 80px 150px 150px 80px;
		grid-template-rows: 50px 200px 80px;
		grid-template-areas: 
			"header header header header"
			"sidebarleft main main sidebarright"
			"footer footer footer footer";
		.item {
			border:1px solid #000;
		}
	}
}
</style>
