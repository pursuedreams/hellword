<template>
  <div>
    <input :value="value" readonly style="width:1000px;height:30px;"/>
    <selectDemo :nodes="list" :props=props :value="value"></selectDemo>
  </div>
</template>

<script>
import selectDemo from "./selectDemo.vue"
import BUS from "@/views/cascader/BUS.js"
const name = "demo"
export default {
  name,
  components:{
    selectDemo
  },
  props: [
      "value",
      "list",
      "props",
  ],
  mounted() {
    BUS.$on("getValue", val => {
      if(val.name){
        this.$emit('input', val.name);
      } else {
        this.$emit('input', val.map( item => item.name));
      }
     
    })
  },
}
</script>

<style lang="less" scoped>
input {
  border: 1px solid #eee;
}
</style>