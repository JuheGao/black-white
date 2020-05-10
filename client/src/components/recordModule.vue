<template>
  <div class="recordModule">
    <Actionsheet ></Actionsheet >
    <div @click.stop.prevent="operateStartRecord">开始录音</div>
  </div>
</template>

<script>
import Recorderx, { ENCODE_TYPE } from "recorderx";
import { Actionsheet  } from 'vux'
export default {
  name: 'recordModule',
  components: {
    Actionsheet 
  },
  data() {
    return {
      // 录音插件
      recordPlugin: ''
    }
  },
  mounted() {
    const self = this;
    // 初始化 录音模块
    self.initRecordModule()
  },
  methods: {
    // 初始化 录音模块
    initRecordModule() {
      const self = this;
      self.recordPlugin = new Recorderx();
    },
    // 操作 开始录音
    operateStartRecord() {
      const self = this;
      console.log('操作 开始录音', self.recordPlugin)
      self.recordPlugin.start(true)
        .then(() => {
          console.log("start recording");
        })
        .catch(error => {
          console.log("Recording failed.", error);
        });
    }
  }
}
</script>

<style lang="less" scope>
  
</style>
