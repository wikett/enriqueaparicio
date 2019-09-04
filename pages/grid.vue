<template>
  <div>
    <div class="container mx-auto bg-pink-500">
      <div class="flex">
        <div class="w-full bg-red-500">
          <h1>Hola</h1>
        </div>
      </div>
    </div>


    <div class="flex">
      <div class="w-full bg-gray-500 h-24">
        <h1>FULL WIDTH</h1>
      </div>
    </div>

    <div class="container mx-auto bg-pink-500 mt-4">
         <div class="w-full text-center">
        <h1>FLEX WRAP</h1>
      </div>
      <div class="flex flex-wrap mb-4">
        <div class="w-1/3 mb-4 bg-gray-400 h-12">1/3</div>
        <div class="w-1/3 mb-4 bg-gray-500 h-12">1/3</div>
        <div class="w-1/3 mb-4 bg-gray-400 h-12">1/3</div>
        <div class="w-1/3 mb-4 bg-gray-500 h-12">1/3</div>
        <div class="w-1/3 mb-4 bg-gray-400 h-12">1/3</div>
        <div class="w-1/6 mb-4 bg-gray-400 h-12">1/6</div>
        <div class="w-1/6 mb-4 bg-gray-400 h-12">1/6</div>
        </div>
    </div>

     <div class="container mx-auto bg-pink-500 mt-4">
         <div class="w-full text-center">
        <h1>FLEX WRAP Auto Colum Widths (7 columns)</h1>
      </div>
      <!-- Seven columns -->
        <div class="flex mb-4">
        <div class="flex-1 bg-gray-400 h-12"></div>
        <div class="flex-1 bg-gray-500 h-12"></div>
        <div class="flex-1 bg-gray-400 h-12"></div>
        <div class="flex-1 bg-gray-500 h-12"></div>
        <div class="flex-1 bg-gray-400 h-12"></div>
        <div class="flex-1 bg-gray-500 h-12"></div>
        <div class="flex-1 bg-gray-400 h-12"></div>
        </div>
    </div>

    <div class="container mx-auto bg-pink-500 mt-4">
         <div class="w-full text-center">
        <h1>Colum centered</h1>
      </div>
      <!-- Seven columns -->
       <div class="flex flex-wrap">
        <div class="w-1/3 mx-auto bg-gray-500 h-12">Width: 1/3 centered</div>
        
        </div>
    </div>

    <div class="container mx-auto bg-pink-500 mt-4">
         <div class="w-full text-center">
        <h1>Column Spacing</h1>
      </div>
      <!-- Seven columns -->
       <div class="px-2">
        <div class="flex flex-wrap -mx-2">
            <div class="w-1/3 px-2">
                <div class="bg-gray-400 h-12 text-left">Left align</div>
            </div>
            <div class="w-1/3 px-2">
                <div class="bg-gray-500 h-12 text-center">
                    <div>Center align</div>
                </div>
            </div>
            <div class="w-1/3 px-2">
                <div class="bg-gray-400 h-12 text-right">Right align</div>
            </div>
            <div class="w-1/2 px-2 mt-4">
                <div class="relative bg-orange-400 h-12">
                   <div class="absolute bottom-0 right-0 bg-gray-800">
                        Absolute child
                    </div>
                </div>
            </div>
            <div class="w-1/2 px-2 mt-4">
                <div class="bg-gray-500 h-12"></div>
            </div>
            
        </div>
        </div>
    </div>




  </div> <!-- End div template -->

  

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
    //layout
    //layout: 'dark',
    // variables
    data() {
      return {}
    },
    computed: {},
    // when component uses other components
    components: {
      AppTravelCard
    },
    // methods
    watch: {},
    methods: {},
    // component Lifecycle hooks
    beforeCreate() {},
    created() {},
    mounted() {},

  }
</script>