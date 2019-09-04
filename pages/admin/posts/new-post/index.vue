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
          title: '',
          imageUrl: '',
          texto: ''
        }
      }
    },
    methods: {
      
    }
  }
</script>