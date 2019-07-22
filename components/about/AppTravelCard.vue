<template>
<div class="p-0 sm:p-0 md:p-3 ">
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 border-black">
  <transition name="blury-picture">
    <img v-show="loaded" class="w-full" src="https://picsum.photos/300/200" alt="Sunset in the mountains">
  </transition>
  <transition name="from-right">
    <div class="px-6 py-4" v-show="loaded">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
  </transition>
  <transition name="fade" >
  <div class="px-6 py-4" v-show="loaded">    
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    
  </div>
  </transition>
</div>
</div>
</template>

<script>
    export default {
      props: {
        travelCardData: Object
      },
      data() {
          return {
              count: 1,
              loaded: false
          }
      },
      mounted: function(){
        this.loaded = true;
      },
      methods: {
        
      }
    }
</script>
<style lang="scss" scoped>
.blury-picture-enter-active {
  transition: filter 3s;
}
.blury-picture-enter-to {
  filter: blur(0px);
}
.blury-picture-enter {
  filter: blur(10px);
}
.fade-enter-active {
  transition: opacity 2s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.from-right-enter-active{
  //transition: opacity 1s ease-in;
  transition: transform 1s ease-in-out;
}

.from-right-enter-to {
  opacity: 1;
  transform: translateX(0px)
}

.from-right-enter {
  opacity: 0;
  transform: translateX(200px)
}
</style>
