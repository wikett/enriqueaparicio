<template>
  <div>
    <h1>{{titleForm}}</h1>
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 for="inline-full-name">
            Image Url
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="post.imageUrl"
                 class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 id="inline-title"
                 type="text"
                 value="https://source.unsplash.com/random">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 for="inline-full-name">
            Title
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="post.title"
                 class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 id="inline-title"
                 type="text"
                 value="My title">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 for="inline-username">
            Texto
          </label>
        </div>
        <div class="md:w-2/3">
          <textarea v-model="post.texto"
                    class="w-full shadow-inner p-4 border-0"
                    placeholder="We build fine acmes."
                    rows="6"></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button @click="onSave()"
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button">
            {{titleButton}}
          </button>
          <button @click="onCancel()"
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'AppPostForm',
    props: ['post'],
    data() {
      return {
          titleForm: '',
          titleButton: '' 
      }
    },
    methods: {
      onSave() {
        console.log(this.post);

        axios.post('https://enrique-cv-cf052.firebaseio.com/posts.json', this.post)
          .then(result => console.log(result))
          .catch(e => console.log(e))

      },
      onCancel() {
        //Navigate back
        this.$router.back()
      }
    },
    // methods
    watch: {},
    // component Lifecycle hooks
    beforeCreate() {},
    created() {},
    mounted() {
        if(this.post.title===""){
            this.titleForm = "Crear un nuevo post";
            this.titleButton = "Crear";
        }
        else {
            this.titleForm = "Edita este post";
            this.titleButton = "Editar";
        }
            
    },
  }
</script>