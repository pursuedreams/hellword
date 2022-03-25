<template>
  <div class="cascader">
    <input
      :value="value"
      placeholder="请选择"
      readonly
      class="cascader-input"
      @click="showSelectboxHandle"
    />
    <span
      class="arrowIcon__top"
      :class="{ arrowIcon__rotate: !isVisibleFirst }"
    ></span>

    <div class="cascader-list clearfix">
      <div class="cascader-list_item" v-if="isVisibleFirst">
        <ul>
          <li v-for="(item, inx) in options" :key="inx">
            <div
              class="cascader-list_item--li"
              @click="openChildrenHandle(inx, item)"
            >
              <span :class="{ clicked: inx == curr }"> {{ item.name }} </span>
              <div
                class="arrowIcon__right"
                :class="{ 'arrowIcon__right--checked': item.isShowChild }"
                v-show="item.children && item.children.length > 0"
              ></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="cascader-list_item" v-if="isVisibleSecond">
        <div class="allChecked">
          <input
            type="checkbox"
            v-model="options[curr].multiple"
            @click="selectAllHandle()"
          />
          全选
        </div>

        <ul>
          <li
            v-for="(innerItem, innerInx) in options[curr].children"
            :key="innerInx"
          >
            <div
              class="cascader-list_item--li"
              @click="selectDataHandle(innerInx, innerItem)"
            >
              <span>
                {{ innerItem.name }}
              </span>
              <div
                class="checkedIcon"
                v-show="!innerItem.children && innerItem.isClick"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const name = "demo";
export default {
  name,
  components: {},
  props: ["options"],
  data() {
    return {
      resultData: [],
      value: "",
      curr: -1,
      isVisibleFirst: false,
      isVisibleSecond: false,
    };
  },
  methods: {
    // 显示选择框
    showSelectboxHandle() {
      this.isVisibleFirst = !this.isVisibleFirst;
      this.isVisibleSecond = false;
    },
    // 打开子级列表
    openChildrenHandle(index, item) {
      if (Object.prototype.hasOwnProperty.call(item, "isShowChild")) {
        item.isShowChild = !item.isShowChild;
      } else {
        this.$set(item, "isShowChild", true);
      }

      this.curr = index;
      this.isVisibleSecond = true;
    },
    // 选中子级
    selectDataHandle(index, item) {
      if (Object.prototype.hasOwnProperty.call(item, "isClick")) {
        if (item.isClick) {
          item.isClick = false;
          this.resultData = this.resultData.filter(
            (filteritem) => filteritem.value !== item.value
          );
        } else {
          item.isClick = true;
          this.resultData.push(item);
        }
      } else {
        this.$set(item, "isClick", true);
        this.resultData.push(item);
      }

      this.isSelctAllSatus();

      this.value = [...this.resultData].map((item) => item.name);

      this.$emit('inputData', this.resultData)
    },
    // 设置复选框状态
    isSelctAllSatus() {
      let arrlength = this.options[this.curr].children.filter(
        (item) => !item.isClick
      );
      if (arrlength.length === this.options[this.curr].children.length) {
        this.options[this.curr].multiple = false;
      } else {
        this.options[this.curr].multiple = true;
      }
    },
    // 全选/取消全选
    selectAllHandle() {
      if (
        (this.options[this.curr].children &&
          !this.options[this.curr].children.length) ||
        !this.options[this.curr].children
      )
        return;

      if (this.options[this.curr].multiple) {
        this.options[this.curr].multiple = false;

        this.options[this.curr].children.map((item) => {
          this.resultData = this.resultData.filter(
            (innerItem) => innerItem.value !== item.value
          );
        });
      } else {
        this.options[this.curr].multiple = true;
        this.resultData = [
          ...this.resultData,
          ...this.options[this.curr].children,
        ];
      }

      this.options[this.curr].children.map((item) => {
        if (Object.prototype.hasOwnProperty.call(item, "isClick")) {
          item.isClick = this.options[this.curr].multiple ? true : false;
        } else {
          this.$set(item, "isClick", true);
        }
      });

      this.resultData = [...new Set(this.resultData)];
      this.value = [...this.resultData].map((item) => item.name);

      this.$emit('inputData', this.resultData)
    },
  },
};
</script>

<style lang="less" scoped>
.cascader {
  position: relative;

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  .cascader-input {
    border: 1px solid #eee;
    height: 35px;
    line-height: 35px;
    width: 332px;
    padding: 0 15px;
    text-overflow: ellipsis;
    position: absolute;
    top: 0px;
    left: 0;
    background: #ffffff;
  }

  .cascader-list {
    position: absolute;
    top: 45px;
    left: 0;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 8px 0px #ccc;
    padding: 5px 0;
    z-index: 10;
    transition: 200ms;
  }
  .cascader-list .cascader-list_item {
    float: left;
    width: 180px;
    height: 204px;
    overflow: auto;
    border-left: 1px solid #ccc;
  }

  ul li {
    line-height: 40px;
  }
  ul li:hover {
    background: #e6eeff;
  }

  .cascader-list_item--li {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .clicked {
    color: #1e90ff;
  }
  .arrowIcon__right {
    width: 7px;
    height: 7px;
    border-top: 2px solid rgba(0, 0, 0, 0.25);
    border-right: 2px solid rgba(0, 0, 0, 0.25);
    transform: rotate(45deg);
  }
  .arrowIcon__right--checked {
    width: 7px;
    height: 7px;
    border-top: 1px solid #3377ff;
    border-right: 1px solid #3377ff;
    transform: rotate(45deg);
  }
  .arrowIcon__top {
    position: absolute;
    left: 330px;
    top: 17px;
    display: block;
    width: 10px;
    height: 10px;
    border-left: 1px solid #aaa;
    border-top: 1px solid #aaa;
    transform: rotate(225deg);
    transform-origin: 2px 2px;
    transition: 200ms;
  }

  .arrowIcon__rotate {
    transform: rotate(45deg);
  }
  .checkedIcon {
    width: 7px;
    height: 12px;
    border-color: #3377ff;
    border-style: solid;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
  .allChecked {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding-right: 20px;
    background: #ffffff;
    box-sizing: border-box;
  }
}
</style>