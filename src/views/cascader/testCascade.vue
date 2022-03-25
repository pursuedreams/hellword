<template>
  <div>
    <cascader :options="cascaderData" @inputData="getinputData"></cascader>
  </div>
</template>

<script>
import cascader from "@/views/cascader/cascader1.vue";
const name = "cascader1";
export default {
  name,
  components: { cascader },
  data() {
    return {
      value: "",
      props: { multipleLevel: 2 },
      cascaderData: [
        {
          name: "东南",
          value: 1,
          children: [
            {
              name: "东南子级-1",
              value: 2,
            },
            {
              name: "东南子级-2",
              value: 4,
            },
          ],
        },
        {
          name: "西北",
          value: 6,
          children: [
            {
              name: "西北子级-1",
              value: 8,
            },
            {
              name: "西北子级-2",
              value: 10,
            },
          ],
        },
        { name: "西南", value: 12 },
      ],
    };
  },
  mounted() {
    console.log(this.value, "value");
  },
  methods: {
      getinputData(val) {
        console.log(val, "1111111111111")
      }
  }
};
</script>

<style lang="less" scoped>
</style>