<template>
  <div>
    <app-header></app-header>
    <app-navigation></app-navigation>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue'
import AppNavigation from '~/components/common/AppNavigation.vue'

export default {
  components: {
    AppHeader,
    AppNavigation
  }
}
</script>

<style>

</style>
