<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="container-dispaly">
        <div class="container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'containerdispaly',
	data() {
		return {
			content: 'other page'
		};
	}
};
</script>

<style lang="scss" scoped>
@import "~@/css/main";
$color: red;
.container-dispaly {
	.container{
        // width: 400px;
		display: grid;
        // grid-template-columns: 50px 50px 50px 50px;
        // grid-template-columns: repeat(4, 50px);
		grid-template-rows: 100px 100px 100px 100px;
        // grid-template-columns: repeat(2, 100px 20px 80px);
        grid-template-columns: 150px 1fr 2fr; // 绝对长度单位
        // grid-template-columns: 150px auto  100px; // 绝对长度单位

	}
}
</style>
