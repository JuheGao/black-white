<template>
  <div class="home">
    Home
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <RecordModule></RecordModule>
    <Actionsheet></Actionsheet>
  </div>
</template>

<script>
import { Actionsheet  } from 'vux'
import RecordModule from '@/components/recordModule'
export default {
  name: 'Home',
  components: {
    RecordModule,
    Actionsheet
  }
}
</script>
