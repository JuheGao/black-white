<template>
  <div>
    <popup class="popupModule" v-model="showPopup" v-transfer-dom>
      <section></section>
      <section>
        <SliderModule v-model="sliderValue"></SliderModule>
      </section>
      <section>
        <textarea placeholder="一起努力，让非黑即白越来越好..." v-model="reviewText"></textarea>
      </section>
      <section @click.stop.prevent="operateIssueReview">发布</section>
    </popup>
  </div>
</template>

<script>
import { Popup, TransferDom } from 'vux'
import SliderModule from './sliderModule'
export default {
  name: 'popupModule',
  directives: {
    TransferDom
  },
  components: {
    Popup,
    SliderModule
  },
  data() {
    return {
      issueLock: false,
      reviewText: '',
      sliderValue: 50
    }
  },
  props: {
      showPopup: Boolean,
      default() {
          return false
      }
    },
  mounted() {
    const self = this;
    // 初始化 弹框模块
    self.initPopupModule()
  },
  methods: {
    // 初始化 弹框模块
    initPopupModule() {
      const self = this;
    },
    // 操作 发布评论
    operateIssueReview() {
      const self = this;
      // console.log('操作 发布评论', self.reviewText, self.sliderValue)
      if (!self.reviewText || self.issueLock) {
        return
      }
      // 发布上锁
      self.issueLock = true
      // TUDO 提交数据于server

      self.issueLock = false
    }
  }
}
</script>

<style lang="less" scope>
  .popupModule {
    width: 100%;
    min-height: 5rem;
    box-sizing: border-box;
    section {
      width: 90%;
      margin: 0.2rem auto;
      &:nth-of-type(1) {

      }
      &:nth-of-type(2) {
        
      }
      &:nth-of-type(3) {
        height: 3.90rem;
        border-bottom: 1px solid #eaeaea;
        box-sizing: border-box;
        margin-top: 0.06rem;
        textarea {
          width: 100%;
          height: 100%;
          padding: 0.25rem;
          font-family: PingFangSC-Regular;
          font-size: 0.30rem;
          border: none;
          line-height: 0.42rem;
          box-sizing: border-box;
          &:focus{
            outline: none;
          }
          &::-webkit-input-placeholder{
            color: #999999;
          }
          &::-moz-placeholder{
            color: #999999;
          }
          &::-ms-input-placeholder{
            color: #999999;
          }
        }
      }
      &:nth-of-type(4) {
        width: 6.70rem;
        height: 0.76rem;
        line-height: 0.76rem;
        text-align: center;
        background: linear-gradient(90deg,rgba(255,180,151,1) 0%,rgba(254,122,114,1) 100%);
        border-radius: 0.10rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255,255,255,1);
        letter-spacing: 0.02rem;
      }
    }
  }
</style>
