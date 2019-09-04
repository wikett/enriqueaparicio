<template>
  <div class="dark">
    <AppHeader></AppHeader>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.dark {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    min-height: 100%;
    padding: 0;
    background: black;
    color: white;
}


</style>
