<!--------------------------------------------------
  name: index.vue
---------------------------------------------------->

<template>
	<div class="container-gap">
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
	name: 'containergap',
	data() {
		return {
			content: 'other page'
		};
	}
};
</script>

<style lang="scss" scoped>
.container-gap {
	.container{
		display: grid;
        grid-template-columns: repeat(4, 50px);
		grid-template-rows: 100px 100px 100px 100px;
        grid-template-columns: 150px 1fr 2fr;
        
        // grid-row-gap: 20px;
        // grid-column-gap: 20px;
        grid-gap: 20px 20px; 

	}
}
</style>
