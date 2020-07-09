<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="other">
		{{content}}
		<p>11111</p>
		<van-button type="primary" size="large">大号按钮</van-button>
		<van-button type="primary" size="normal">普通按钮</van-button>
		<van-button type="primary" size="small">小型按钮</van-button>
		<van-button type="primary" size="mini">迷你按钮</van-button>
	</div>
</template>

<script>
export default {
	name: '',
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
.other {
	p{
		color: $color;
		font-size: $--html-font-size;
	}
}
</style>
