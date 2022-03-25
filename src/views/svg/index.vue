<template>
 <div class="wrap">
   <!-- 光点列表 -->
    <div
      v-for="item in startPoints"
      :key="`startpoint-${item.key}`"
      :class="['point', item.type === 1 ? 'point-zhiliu' : item.type === 2 ? 'point-jiaoliu' : 'point-chuneng']"
      :style="{ left: `${item.inverterCoord[0]}px`, top: `${item.inverterCoord[1]}px` }"
    ></div>
    <!-- 飞线 -->
    <svg class="fly-lines-dashed" :width="1497" :height="682">
      <filter id="f1" x="-40%" y="-40%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
        <feBlend in="SourceGraphic" in2="offOut"></feBlend>
      </filter>
      <g v-for="item in startPoints" :key="`fly-lines-dashed-${item.key}`">
        <path v-if="item.path && item.type == 1" :d="item.path" :class="`path-style-${item.type}`" />
        <rect v-if="item.path && item.type == 1" :class="['svg-rect', `react-style-${item.type}`]" filter="url(#f1)">
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" :path="item.path" />
        </rect>
      </g>
    </svg>

    <svg class="fly-lines-solid" :width="1497" :height="682">
      <template v-for="item in startPoints">
       
        <g :key="`fly-lines-solid-${item.key}`"  v-if="item.path && item.type == 2">
          <path style="stroke-width: 3" :d="item.path" stroke="#f19149" fill="none" :ref="'path_'+item.type+'_'+item.key" />
          <circle r="1" class="svg-circle" fill="#fff100" v-for="(num,index) in lineCircleCount(item.refLen || 0)" :key="num">
            <animateMotion
              :dur="lineCircleDuration(item.refLen || 0)"
              :id="'co_'+item.key+'_'+index"
              :path="item.path"
              :begin="lineCircleBingtime(index,item.refLen || 0,'co_'+item.key+'_'+index)"
            />
          </circle>
        </g>
      </template>
    </svg>

     <!-- 图片文字高亮列表 -->
    <div
      v-for="(item, index) in devicesArr"
      :key="`device-${item.key}`"
      class="device"
      :style="{ left: `${item.position[0]}px`, top: `${item.position[1]}px` }"
    >
      <img v-if="carouselIndex === index || (mouseIndex && mouseIndex - 1 === index)" :src="item.image" alt="img" />
      <span class="deviceName" :style="{ left: `${item.namePosition[0]}px`, top: `${item.namePosition[1]}px`, ...item.style }">{{
        item.name
      }}</span>
    </div>
 </div>
</template>
<script>
import {devicesArr, points} from './config'
export default {
  data() {
    return {
      startPoints: points,
      devicesArr: [ ...devicesArr ],

      carouselIndex: 0,
      mouseIndex: 0,

      interval: 20,
      speed: 40,
      timeInterval: null,
    }
  },
   computed: {
    lineCircleCount () {
      return (len) => {
        console.log(len, "=============>")
        return Math.ceil(Number(len) / this.interval)
      }
    },
    lineCircleDuration () {
      return (len) => {
        return Number(len) / this.speed
      }
    },
    lineCircleBingtime () {
      return (num, len, id) => {
        const floatCount = Number(len) / this.interval
        const count = Math.ceil(Number(len) / this.interval)
        const delay = this.timeInterval * (count - floatCount)
        return -1 * this.timeInterval * num + 's;' + id + '.end+' + delay + 's'
      }
    },
  },
  mounted() {
    this.timeInterval = this.interval / this.speed
    this.startPoints = points.map(item => {
      console.log(item, "itemitemitem")
      if (item.type === 2) {
        let pathname = 'path_' + item.type + '_' + item.key

       if(Object.prototype.hasOwnProperty.call(this.$refs, pathname)) {
        // if (this.$refs.hasOwnProperty(pathname)) {
          const ref = this.$refs[pathname][0]
          item.refLen = Math.ceil(ref.getTotalLength())
        }
      }
      return item
    })
  },
  methods: {
  }
}
</script>
 <style lang="less" scoped>
.wrap {
  margin-left: 35px;
  margin-right: 35px;
  position: relative;
  width: calc(100% - 70px);
  height: 682px;
  border: 1px solid #1c59a5;
  margin-top: 20px;
  background: rgba(2, 10, 46, 0.9) url(./assets/bg.png) no-repeat center;
  background-size: cover;
  .legends {
    position: absolute;
    right: 30px;
    top: 30px;
    display: flex;
    .jiaoliu,
    .zhiliu {
      display: flex;
      align-items: center;
      .icon {
        width: 10px;
        height: 5px;
        margin-right: 10px;
      }
    }
    .jiaoliu {
      color: #ffad33;
      margin-right: 20px;
      .icon {
        background-color: #fff100;
      }
    }
    .zhiliu {
      color: #00ffff;
      .icon {
        background-color: #00ffff;
      }
    }
  }
  .point {
    z-index: 20;
    position: absolute;
    width: 38px;
    height: 23px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.5s linear, height 0.5s linear;
  }
  .point-zhiliu {
    width: 38px;
    height: 23px;
    background: url(./assets/point_zhiliu.png) no-repeat center;
  }
  .point-jiaoliu {
    background: url(./assets/point_jiaoliu.png) no-repeat center;
  }
  .point-chuneng {
    background: url(./assets/point_chuneng.png) no-repeat center;
  }
  .fly-lines-dashed {
    z-index: 30;
    stroke-width: 1;
    stroke-dasharray: 5, 5;
    fill: none;
    .path-style-1 {
      stroke: rgba(0, 255, 255, 1);
    }
    .svg-rect {
      width: 12px;
      height: 3px;
      transform: translate(-3px, -1.5px);
    }
    .react-style-1 {
      background-color: #00ffff;
      fill: #00ffff;
    }
  }
  .fly-lines-solid {
    z-index: 30;
    // stroke-width: 3;
    stroke-opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .device {
    position: absolute;
    img {
      user-select: none;
    }
    .deviceName {
      position: absolute;
      color: #00ffff;
      font-weight: 700;
      letter-spacing: 1px;
      min-width: 60px;
      font-size: 16px;
    }
  }
  .svg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .cover-svg {
    z-index: 60;
    path {
      fill-opacity: 0.00000001;
      // stroke: red;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>