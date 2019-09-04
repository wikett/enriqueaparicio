<template>
<div class="container mx-auto  bg-orange-300 border-2 border-gray-600 ">
     <div ref="box" class="mx-auto box"></div>
  
        
</div>
   
</template>

<script>
  import AppTravelCard from '~/components/about/AppTravelCard.vue'
  import { TimelineLite, Back } from 'gsap'
  
  export default {
    name: 'About',
    // share common functionality with component mixins
    mixins: [],
    // compose new components
    extends: {},
    // component properties/variables
    props: {},
    async asyncData({
      $axios
    }) {

      const ip = await $axios.$get('http://icanhazip.com');
      console.log(`ip: ${ip}`)
      return {
        ip
      }
    },
    // variables
    data() {
      return {
        loading: false
      }
    },
    computed: {},
    // when component uses other components
    components: {},
    // methods
    watch: {},
    methods: {},
    // component Lifecycle hooks
    beforeCreate() {},
    created() {},
    mounted() {
      const { box } = this.$refs
      const timeline = new TimelineLite() 
      
      timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(box, 0.5, {
      background: 'green'
    },
    '-=0.5' // Run the animation 0.5s early
    )
    },

  }
</script>

<style>
.box { 
  height: 60px; 
  width: 60px; 
  background: red;
}
</style>




