<template>
  <div>
    <cascader :list="cascaderData" v-model="value" :props="props"></cascader>
  </div>
 
</template>

<script>
import cascader from '@/views/cascader/cascader1.vue'
const name = "cascader1"
export default {
  name,
  components: {cascader},
  data () {
    return {
       value: "",
       props: { multipleLevel: 2 },
       cascaderData: [
          {
          name: '东南',
          value: 1,
          level:1,
          allChecked:true,
          nodes: [
              {
                name:'东南子级-1',
                value:1,
                level:2,
              },
              {
                name:'东南子级-2',
                value:2,
                level:2,
              }]
          },
          {
            name: '西北',
            value: 2,
            level:1,
            allChecked:true,
            nodes: [
              {
                name:'西北子级-1',
                value:1,
                level:2,
                allChecked:true,
                // nodes: [
                //   {
                //     name:'西北子级-1-1',
                //   value:2
                //   }
                // ]
                },
                {
                  name:'西北子级-2',
                  value:2,
                  level:2,},
            ]
          },
          {name: '西南',
          value: 3,
          level:1,
          }
          
      ],
    }
  },
  mounted() {
    console.log(this.value, "value")
  }
}
</script>

<style lang="less" scoped>

</style>