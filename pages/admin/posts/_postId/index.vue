<template>
  <div>
    <AppPostForm :post="newPost"></AppPostForm>
  </div>
</template>

<script>
  import AppPostForm from '@/components/admin/AppPostForm'

  export default {
    layout: 'admin',
    components: {
        AppPostForm
    },
    data() {
      return {
        newPost: {
          title: 'Pepito',
          imageUrl: 'http://www.hola.com/asdf.jpg',
          texto: 'Probando el texto'
        }
      }
    },
    methods: { 
      onSave() {
        console.log(this.newPost);

      },
      onCancel() {
        //Navigate back
      }
    }
  }
</script>