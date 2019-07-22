<template>
  <div>
    <!-- <div class="container mx-auto border-4 border-green-300 ">


      <div class="flex flex-wrap px-4 mx-8">
        <div class="w-1/4 bg-gray-200 h-12  px-4 py-2 ">
          <h3>hola</h3>
        </div>
        <div class="w-1/4 bg-gray-400 h-12  px-4 py-2 ">
          <button v-on:click="show = !show">
            Toggle
          </button></div>
        <div class="w-1/4 bg-gray-500 h-12  px-4 py-2 ">
        <transition name="slide-fade">
            <p v-if="show" class="micolor">hello</p>
        </transition>
        </div>
        <div class="w-1/4 bg-gray-700 h-12  px-4 py-2 "></div>
        <div class="w-1/4 bg-gray-900 h-12  px-4 py-2 "></div>
      </div>
    </div> -->
    <div class="container mx-auto">
      <h1>About myself</h1>
      <!-- <button type="button" v-on:click="fechSomething()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get IP
    </button> -->


      <div class="flex flex-wrap border-4 border-red-300 justify-center m-0">

        <AppTravelCard :travelCardData="cardObject"></AppTravelCard>
        <AppTravelCard :travelCardData="cardObject"></AppTravelCard>
        <AppTravelCard :travelCardData="cardObject"></AppTravelCard>
        <AppTravelCard :travelCardData="cardObject"></AppTravelCard>
      </div>
    </div>
  </div>
</template>

<script>
  import AppTravelCard from '~/components/about/AppTravelCard.vue'

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
        loadedPosts: [],
        show: true,
        cardObject: {
          title: "Mi primer titulo"
        }
      }
    },
    computed: {},
    // when component uses other components
    components: {
      AppTravelCard
    },
    // methods
    watch: {},
    methods: {
      async fechSomething() {
        const ip = await this.$axios.$get('http://icanhazip.com');
        console.log(`ip: ${ip}`)
      }
    },
    // component Lifecycle hooks
    beforeCreate() {},
    created() {},
    mounted() {},

  }
</script>
<style lang="scss" scoped>
.micolor {
    $primary-color: #333;
    $second-color: rgb(235, 208, 208);
    background-color: $primary-color;
    color: $second-color;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
