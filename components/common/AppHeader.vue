<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex  items-center flex-shrink-0 text-white mr-6">
      <nuxt-link to="/" class="flex">
      
      <span class="font-semibold text-xl tracking-tight">Enrique</span>
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              v-on:click="toggleMenu()">
        <svg v-if="!burgerMenu" class="fill-current h-3 w-3"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
         <svg v-else class="fill-current h-3 w-3" viewBox="0 0 20 20">
							<path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
				 </svg>
      </button>
        
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block "
         v-bind:class="{'block': burgerMenu, 'hidden': !burgerMenu}">
      <div class="text-sm lg:flex-grow">
        <nuxt-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</nuxt-link>
        <nuxt-link to="/animations" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">SVG</nuxt-link>
        <nuxt-link to="/grid" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Grid</nuxt-link>
        <nuxt-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 active:font-bold active:text-white">Blog</nuxt-link>
        <nuxt-link to="/salvapantallas" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Salvapantallas</nuxt-link>
        <a href="#responsive-header"
           class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header"
           class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          isAuth: {{this.isUserAuth}}
        </a>
      </div>
      <div>
        <nuxt-link to="/login"
           class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        burgerMenu: false
      }
    },
    computed: {
      isUserAuth: function () {
        return this.$store.state.users.auth ? this.$store.state.users.auth.email : "NO AUTH";
      }
    },
    methods: {
      toggleMenu() {
        this.burgerMenu = !this.burgerMenu;
      }
    }
  }
</script>
