<template>
  <div class="home">
    <PopupModule :showPopup="true" />
  </div>
</template>

<script>
import PopupModule from '@/components/popupModule.vue'

export default {
  name: 'Home',
  components: {
    PopupModule
  }
}
</script>
