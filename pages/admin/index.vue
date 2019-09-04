<template>
    <div>
        <h1>Create a new post</h1>
            <button @click="$router.push('admin/posts/new-post')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create
            </button>
        
        <hr/>
        <h1> List of posts</h1>
        <AppPostPreview v-for="item in loadedPosts" :key="item.id" :post="item" :isAdmin="false"/>
        
    </div>
</template>
<script>
import AppPostPreview from '@/components/posts/AppPostPreview'
export default {
    layout: 'admin',
    components: {
        AppPostPreview
    },
    data() {
      return {
      }
    },
    computed: {
        loadedPosts() {
            console.log(this.$store.getters.loadedPosts)
            return this.$store.getters.loadedPosts;
        }
    }
    
}
</script>