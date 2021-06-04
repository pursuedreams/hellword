<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="cssgrid">
		<div class="cssgrid-describe">
			<h6>Grid(网格) 布局是第一个专门为解决布局问题而创建的 CSS 模块</h6>
			<h3>采用grid布局的元素，被称为grid容器(grid container)，简称“容器”。其所有直接子元素（直接子元素的子元素不包含在内）自动成为容器成员，称为grid项目(grid item)，简称“项目”</h3>
		</div>
		<div class="container1">
			<div class="item item-1" v-for="(item, inx1)  in 15 " :key="inx1">
				{{inx1 + 1}}
			</div>
		</div>

		<div class="cssgrid-describe">
			<h6>fr单元允许等分网格容器剩余可用空间来设置网络轨道的大小。例如，下面的代码会将每个网格项设置为网格容器宽度的三分之一：</h6>
		</div>
		<div class="container2">
			<div class="item item-1" v-for="(item, inx2)  in 15 " :key="inx2">
				{{inx2 + 1}}
			</div>
		</div>

		<div class="cssgrid-describe">
			<h6>grid-template-areas属性</h6>
		</div>
		<div class="container3">
			<div class="item item-a">header</div>
			<div class="item item-b">sidebarleft</div>
			<div class="item item-c">main</div>
			<div class="item item-d">sidebarright</div>
			<div class="item item-e">footer</div>
		</div>

		<div class="cssgrid-describe">
			<h6>grid-template-areas属性</h6>
		</div>
		<div class="container4">
			<div class="item" v-for="(item, inx) in 9" :key="inx">
				{{inx+1}}
			</div>
		</div>

		<!-- auto-fill 关键字 -->
		<div class="container-auto-fill">
			<div class="item" v-for="(item, inx) in 9" :key="inx">
				{{inx+1}}
			</div>
		</div>

		<!-- 12网格布局 -->
		<div class="container-grid-12">
			<div class="item" v-for="(item, inx) in 12" :key="inx">
				{{inx+1}}
			</div>
		</div>

		<!-- 项目属性 -->
		<div class="container-grid-12 grid-items">
			<div class="item" v-for="(item, inx) in 9" :key="inx" :class="inx+1 ? `item-${inx+1}` : ''">
				项目属性 :{{inx+1}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			content: 'cssgrid'
		};
	}
};
</script>

<style lang="scss" scoped>
@import "~@/css/main";
$color: red;
.cssgrid {
	padding: 20px;
	p{
		color: $color;
		font-size: $--html-font-size;
	}
	.cssgrid-describe {
		margin: 20px 0;
		color: #48429c;
		h3,h6{
			text-align: left;
			line-height: 1.5;
			font-weight: bold;
		}
	}
	.container1 {
		display: grid; // | inline-grid

		// grid-template-columns: 40px 50px auto 50px 40px;
		// grid-template-rows: 25% 100px 100px;

		grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
		grid-template-rows: [row1-start] 50px [row1-end] 100px [third-line] 100px [last-line];

		.item {
			border:1px solid #000;
		}
	}

	.container2 {
		display: grid; // | inline-grid

		// grid-template-columns: 40px 50px auto 50px 40px;
		// grid-template-rows: 25% 100px 100px;
		grid-template-columns: 1fr 50px 1fr 1fr;
		grid-template-rows: [row1-start] 50px [row1-end] 100px [third-line] 100px [last-line] 100px;

		.item {
			border:1px solid #000;
		}
	}

	.container3 {
		display: grid; // | inline-grid

		// grid-template-columns: 40px 50px auto 50px 40px;
		// grid-template-rows: 25% 100px 100px;
		grid-template-columns: 1fr 50px 1fr 1fr;
		grid-template-rows: [row1-start] 50px [row1-end] 100px [third-line] 100px [last-line] 100px;

		.item {
			border:1px solid #000;
		}
	}
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
	.container3{
		display: grid; // | inline-grid
		// grid-template-columns: 150px 150px 80px;
		// grid-template-rows: 50px 200px 80px;
		// grid-template-areas: "header header header"
        //              "sidebar main  main"
		//              "footer footer footer";
		grid-template-columns: 80px 150px 150px 80px;
		grid-template-rows: 50px 200px 80px;
		grid-template-areas: 
			"header header header header"
			"sidebarleft main . sidebarright"
			"footer footer footer footer";
	}

	.container4 {
		display: grid; // | inline-grid
		// grid-template-columns: 100px 100px 100px;
		// grid-template-rows: 100px 100px 100px;
		// grid-template-columns: 33.33% 33.33% 33.33%;
		// grid-template-columns: repeat(3,100px);
		grid-template-columns: repeat(2, 100px 20px 80px);
		grid-template-rows: repeat(3, 100px);
		
		.item{
			background: gold;
			font: 50px bold;
		}
		.item:nth-child(2n){
			background:red;
		}
		.item:nth-child(3n){
			background:#35885e;
		}
		.item:nth-child(4n){
			background:#484bc1;
		}
		.item:nth-child(5n){
			background:#b331a9;
		}
		.item:nth-child(6n){
			background:#e4c4d0;
		}
		.item:nth-child(7n){
			background:#885f35;
		}
	}
	// auto-fill
	.container-auto-fill {
		display: grid;
		// grid-template-columns: repeat(auto-fill, 100px); // auto-fill
		grid-template-columns: 130px 50px auto; // fr 关键字
		// grid-template-columns: 150px 1fr 2fr; 	// 第一列的宽度为150像素，第二列的宽度是第三列的一半
		// grid-template-columns: 1fr 1fr minmax(10px, 0.1fr); // 表示列宽不小于100px，不大于1fr
		// grid-row-gap: 20px; 
		// grid-column-gap: 20px; // 列间距
		grid-gap: 20px 20px;
		// justify-items: start;
		justify-content: space-evenly;
		.item{
			background: gold;
			font: 50px bold;
			border:1px solid #000;
		}
	}

	.container-grid-12 {
		display: grid;
		grid-template-rows: repeat(1, 100px);
		grid-template-columns: repeat(12, 1fr);
		// justify-items: center;
		.item{
			background: #b331a9;
			border:1px solid #000;
		}
	}

	.grid-items {
		display: grid;
		// grid-template-rows: repeat(3, 100px);
		// grid-template-columns: repeat(3, 100px);

		grid-template-rows: [line1] 100px [line2] 100px [line3] 100px [line4];
		grid-template-columns: [col1] 100px [col2] 100px [col3] 100px;

		// justify-items: center;
		// align-items: center;

		.item{
			background: hsl(86, 83%, 57%);
			border:1px solid #000;
		}
		.item-1 {
			// grid-column-start: 1;
			// grid-column-end: 3;
			// grid-row-start: 2;
			// grid-row-end: 4;
			// grid-column-start: col1;
			// grid-column-end: col3;
			// grid-row-start: line2;
			// grid-row-end: line4;

			// grid-column: col1 / col3;
			// grid-row: line2 / line4;

			grid-area: 2 / 1 / 4 / 3;
			justify-self: center ;
			align-self: center;
		}
	}

}
</style>
