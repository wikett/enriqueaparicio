<template>
    <div>
        <h1>///// isAdmin: {{isAdmin}}  </h1>
        <h1>{{post.title}}</h1>
        <span>Last updated on XXX</span>
        <span>Written by NAME</span>
        <p>{{post.texto}}</p>
        
        <nuxt-link v-if="isAdmin" :to="'/admin/posts/'+post.id">Editar Post</nuxt-link>
    </div>
</template>


<script>
export default {
    name: 'AppPost',
    props: ['post', 'isAdmin']
}
</script>