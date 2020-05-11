<template>
  <div class="sliderModule" ref="sliderModule">
    <div class="sliderLine">
      <div class="sliderRunner" :style="{width: sliderSchedule + '%'}"  ref="sliderRunner"></div>
    </div>
    <div class="sliderBlock" :style="{left: sliderSchedule + '%'}" ref="sliderBlock"></div>
  </div>
</template>

<script>
  export default {
    name: 'sliderModule',
    model: {
      prop: 'sliderSchedule',
      event: 'change'
    },
    props: {
      sliderSchedule: Number,
      default() {
        return 0
      }
    },
    data() {
      return {
        showPopup: false,
        sliderPosition: {
          left: 0,
          top: 0
        }
      }
    },
    mounted() {
      const self = this;
      // 初始化 滑块模块
      self.initSliderModule()
    },
    methods: {
      // 初始化 滑块模块
      initSliderModule() {
        const self = this;
        self.$nextTick(() => {
          // console.log(self.$refs.sliderBlock)
          const sliderModuleRef = self.$refs.sliderModule
          const sliderBlockRef = self.$refs.sliderBlock
          const sliderRunnerRef = self.$refs.sliderRunner
          let sliderSchedule = 0
          // 计算x坐标
          const elementLeft = (event) => {
            const e = event || window.event;
            let offset = e.offsetLeft;
            if(e.offsetParent != null) offset += elementLeft(e.offsetParent);
            return offset;
          }
          // 滑动块x坐标
          const sliderModuleRefX = elementLeft(sliderModuleRef)
          // 屏幕滑动事件
          sliderBlockRef.addEventListener('touchmove', (event)=>{
            const e = event || window.event;
            // 获取滑动x坐标
            let pageX = e.touches[0].pageX - sliderModuleRefX - sliderBlockRef.offsetWidth
            // 计算百分比
            sliderSchedule = (pageX / sliderModuleRef.offsetWidth) * 100
            if (sliderBlockRef.offsetWidth + pageX > sliderModuleRef.offsetWidth) {
              sliderSchedule = 100
              sliderBlockRef.style.right = '0'
              sliderBlockRef.style.left = 'auto'
            } else if (sliderBlockRef.offsetWidth + pageX < sliderBlockRef.offsetWidth ) {
              sliderSchedule=0
              sliderBlockRef.style.right = 'auto'
              sliderBlockRef.style.left = sliderSchedule+'%'
            } else {
              sliderBlockRef.style.right = 'auto'
              sliderBlockRef.style.left = sliderSchedule+'%'
            }
            sliderRunnerRef.style.width = sliderSchedule+'%'
            console.log(sliderSchedule, '...sliderSchedule')
            self.$emit('change', sliderSchedule)
            e.preventDefault()
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .sliderModule {
    position: relative;
    width: 100%;
    height: 1rem;
    display: grid;
    align-content: center;
    .sliderLine {
      position: relative;
      width: 100%;
      height: 0.1rem;
      background: #999;
      border-radius: 8px;
      .sliderRunner{
        position: absolute;
        background: yellow;
        height: 100%;
        // width: 0;
      }
    }
    .sliderBlock {
      position: absolute;
      top: 50%;
      // left: 0;
      width: 0.5rem;
      height: 0.8rem;
      margin-top: -0.4rem;
      background: #ccc;
    }
  }
</style>