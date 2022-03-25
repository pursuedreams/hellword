<template>
    <div class="selectDemo">
        <ul>
            <!-- 全选按钮 -->
            <div v-if="allChecked" class="allChecked">
                <input type="checkbox" v-model="checkVal" @click="checkValHanle(nodes)"/> 全选
            </div>

            <!-- 列表循环 -->
            <li v-for="(item,index) in nodes" :key="index">
                
                <div
                    class="listName"
                    @click="changeList(item, index)"
                >
                    <span :class="{'clicked':item.isClick}" > {{item.name}} </span>
                    <div class="arrowright" :class="{'arrowrightClick':item.isShowChild}" v-show="item.nodes &&item.nodes.length > 0"></div>
                    <div class="checkedIcon" v-show="!item.nodes && item.isClick && item.level === props.multipleLevel "></div>
                </div>

                <!-- 递归组件 -->
                <!-- <div class="children" v-show="item.isShowChild && item.nodes && item.nodes.length > 0">
                    <selectDemo :nodes ="item.nodes" :props="props" :allChecked="item.allChecked? item.allChecked: false"></selectDemo>
                </div> -->
            </li>
        </ul>
    </div>
</template>
<script>
import selectDemo from "@/views/cascader/selectDemo"
import BUS from "@/views/cascader/BUS.js"
export default {
    name: "selectDemo",
    data () {
        return {
            isShowList: false,
            resultData:[],
            checkVal: false,
        }
    },
    components:{
        selectDemo
    },
    props:[
        "nodes",
        "props",
        "allChecked",
        "storageData",
        
    ],


    methods: {
        checkValHanle(val){
            console.log(val, "checkValHanle")
            this.nodes.map((item)=> {
               if(Object.prototype.hasOwnProperty.call(item, 'isClick')){
                    item.isClick = !item.isClick;
                } else {
                    this.$set(item, 'isClick', true);
                }

                this.resultData.push(item)
            })

            const resultData = this.nodes.filter(filteritem => filteritem.isClick !== false)
            BUS.$emit("getValue", resultData);
        },
        changeList(item,index) {
                console.log(this.$data, "$data=======================>", this.$props)

                // 用来判断选中状态
                if(Object.prototype.hasOwnProperty.call(item, 'isClick')){
                    item.isClick = !item.isClick;
                } else {
                    this.$set(item, 'isClick', true);
                }

                // 用来判断下一级状态
                if(Object.prototype.hasOwnProperty.call(item, 'isShowChild')){
                    item.isShowChild = !item.isShowChild;
                } else {
                    this.$set(item, 'isShowChild', true);
                }

                if(!item.isShowChild){
                    this.childStatus(item);
                }

                if(item.isShowChild){
                    for(let i = 0; i < this.nodes.length; i++){
                        if( Object.prototype.hasOwnProperty.call(this.nodes[i], 'isShowChild') && this.nodes[i].isShowChild && index !== i){
                            this.nodes[i].isShowChild = false;
                            this.childStatus(this.nodes[i]);
                            break;
                        }
                    }
                }
                // console.log(item.level, " this.resultData", this.props.multipleLevel, item.isClick, this.resultData)
                
                if(item.level === this.props.multipleLevel && item.isClick){
                    this.resultData.push(item)
                    BUS.$emit("getValue", this.resultData);

                } else {
                    this.resultData = this.resultData.filter(filteritem => filteritem.value !== item.value && filteritem.name !== item.name)
                     BUS.$emit("getValue", this.resultData);
                   
                }

                if(this.resultData.length===0){
                    this.checkVal = false
                }
                if(this.nodes.length === this.resultData.length){
                    this.checkVal = true
                }

                if(!this.props.multipleLevel){
                    BUS.$emit("getValue", item);
                }
        },
        //如果子列表的子列表被展开，点击父列表关闭时，子列表的子列表也应该被关闭 
        childStatus: function(item){
            if(!item.nodes || item.nodes.length <1){
                return;
            }
            for(let i = 0; i < item.nodes.length; i++){
                // 因为每一级列表只会有一个展开项，因此只需要找到展开项 递归即可
                if(item.nodes[i].isShowChild){
                    item.nodes[i].isShowChild = false;
                    this.childStatus(item.nodes[i]);
                    break;
                }
            }
        }
    },
}
</script>
<style lang="less" scoped>
    .selectDemo{
        position: relative;
        ul{
            position:absolute;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            border:1px solid rgba(0,0,0,0.25);
            border-radius: 5px;
        }
        ul li{
            position: relative;
            width:200px;
            display: flex;
            flex-direction: row;
            list-style: none;
            text-align: center;
            line-height:50px;
            box-sizing: border-box;
           
        }
        ul li:hover{
            background: #E6EEFF;
        }

        .listName{
            position: relative;
            width: 100%;
            display:flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            padding: 0 20px;
        }
        .children{
            position: absolute;
            right:0px;
            height:0px;
            padding:0px;
        }
        .clicked{
            color:#1E90FF;
        }
        .arrowright{
            width: 7px;
            height: 7px;
            border-top: 2px solid rgba(0,0,0,0.25);
            border-right: 2px solid rgba(0,0,0,0.25);
            transform: rotate(45deg);
        }
        .arrowrightClick{
            width: 7px;
            height: 7px;
            border-top: 1px solid #3377FF;
            border-right: 1px solid #3377FF;
            transform: rotate(45deg);
        }
        .checkedIcon {
            width: 7px;
            height: 12px;
            border-color: #3377FF;
            border-style: solid;
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
        }
        .allChecked {
            width: 100%;
            text-align: right;
            padding-right: 20px;
            background: #ffffff;
            box-sizing: border-box;
        }
    }
</style>


