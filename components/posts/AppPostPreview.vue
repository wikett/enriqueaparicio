<template>
  <nuxt-link :to="'/posts/' + post.key">
    <div class="border-2 border-gray-600">
      <div>
        <p>key: {{post.key}}</p>
        <h1>{{post.title}}</h1>
        <p>{{post.texto}}</p>
      </div>
      
        <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Abrir open
        </button>
     
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'AppPostPreview',
    props: ['post', 'isAdmin']
  }
</script>