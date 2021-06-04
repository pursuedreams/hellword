<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="other">
		
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			content: 'other page'
		};
	},
	mounted() {
		// 让我们从一个函数里创建一个对象o，它自身拥有属性a和b的：
		let f = function () {
			this.a = 1;
			this.b = 2;
		}
		let o = new f()
		// 在f函数的原型上定义属性
		f.prototype.b = 3;
		f.prototype.c = 4;
		f.prototype.constructor
		console.log(o.a); // 1
		// a是o的自身属性吗？是的，该属性的值为 1

		console.log(o.b); // 2
		// b是o的自身属性吗？是的，该属性的值为 2
		// 原型上也有一个'b'属性，但是它不会被访问到。
		// 这种情况被称为"属性遮蔽 (property shadowing)"

		console.log(o.c); // 4
		// c是o的自身属性吗？不是，那看看它的原型上有没有
		// c是o.[[Prototype]]的属性吗？是的，该属性的值为 4

		console.log(o.d); // undefined
		// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
		// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
		// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
		// 找不到 d 属性，返回 undefined
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
@import "~@/css/main";
$color: red;

</style>
