<template>
  <nav>
    <h2>Simple Transition Group For Layout: {{ page }}</h2>
    <!--simple navigation, we use nuxt-link for routing links-->
    <ul>
      <nuxt-link exact to="/"><li>index</li></nuxt-link>
      <nuxt-link to="/about"><li>about</li></nuxt-link>
      <nuxt-link to="/users"><li>users</li></nuxt-link>
    </ul>
    <br>
    <!--we use the page to update the class with a conditional-->
    <svg :class="{ 'active' : (page === 'about') }" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 447 442">
      <!-- we use the transition group component, we need a g tag because it’s SVG-->
      <transition-group name="list" tag="g">
        <rect class="items rectangulo" ref="rectangulo" key="rectangulo" width="171" height="171"/>
        <circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
        <g class="items text" id="text" key="text">
          <rect x="56" y="225" width="226" height="16"/>
          <rect x="56" y="252" width="226" height="16"/>
          <rect x="56" y="280" width="226" height="16"/>
        </g>
        <rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
      </transition-group>
    </svg>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
      ...mapState({
          page: state => state.paginas.page
      })
  }
}
</script>
<style lang="scss" scoped>
nav {
        background-color: darkcyan;
}
</style>
