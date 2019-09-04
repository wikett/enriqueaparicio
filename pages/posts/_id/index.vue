<template>
    <div>
        <AppPost :post="post" :is-admin="false"></AppPost>
    </div>
</template>

<script>
import AppPost from '@/components/posts/AppPost';
import axios from 'axios';

export default {
    components: {
        AppPost
    },
    async asyncData({params}){
        let { data } = await axios.get(`${process.env.baseUrl}/posts/${params.id}.json`)
        console.log(data)
        return {post: data}
       
    },
    head() {
        return {
            title: this.post.title,
            meta: [
                {
                    hid: 'og-title',
                    property: 'og:title',
                    content: this.post.title
                }
            ]
        }
    },
}
</script>