<template>
<div>
    <h1>About myself</h1>
    <button type="button" v-on:click="fechSomething()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get IP
    </button>
    <AppTravelCard :travelCardData="cardObject"></AppTravelCard>
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
    props: {
    },
    async asyncData({$axios}) {
        
        const ip = await $axios.$get('http://icanhazip.com');
        console.log(`ip: ${ip}`)
        return { ip }
    },
    // variables
    data() {
        return {
            loadedPosts: [],
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
        async fechSomething(){
            const ip = await this.$axios.$get('http://icanhazip.com');
            console.log(`ip: ${ip}`)
        }
    },
    // component Lifecycle hooks
    beforeCreate() {},
    created(){},
    mounted() {},
    
}
</script>