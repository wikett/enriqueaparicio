<template>
<div>
    <h1>El nuevo blog</h1>
    <h2>Total posts: {{loadedPosts.length}}</h2>

    <AppPostPreview v-for="item in loadedPosts" :key="item.key" :post="item"/>
</div>
</template>

<script>
import AppPostPreview from '@/components/posts/AppPostPreview'
import axios from 'axios';

export default {
    middleware: ['check-auth'],
    components: {
        AppPostPreview
    },

    async asyncData({ params }){
        let { data } = await axios.get(`${process.env.baseUrl}/posts.json`)
        data = Object.entries(data).map(e=> Object.assign(e[1], {key: e[0]}))
        console.log(data)
        return {loadedPosts: data}
    }
}
</script>