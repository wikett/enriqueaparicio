<template>
  <div class="w-full mx-auto mt-6 max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="onSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">email</label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          v-model="password"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign In</button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >Forgot Password?</a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2019 Acme Corp. All rights reserved.</p>
    <button type="button" @click="fetchSomething()">IP</button>
  </div>
</template>

<script>

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: ['check-auth'],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async fetchSomething() {

      console.log(this.$store.state.users.auth)
      console.log(this.$store.getters['users/auth'])

      const ip = await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      console.log(ip)
    },


    onSubmit() {
      console.log(`onSubmit`)
      console.log(`email: ${this.email}`)
      console.log(`password: ${this.password}`)
      console.log(`process.env.fbAPIKey: ${process.env.fbAPIKey}`)

      this.$store.dispatch('users/authenticateUser', {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          })

      /*try {
        
        this.$axios.setHeader('Content-Type', 'application/json', [
      'post'
      ])
        let data  = await this.$axios.$post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA68RpQ7kAQX09mz_V8dBLzVsZBQi5TJ4k',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        )
        console.log(data)
        //this.$store.commit('users/SET_USER', data)
        this.$store.commit('users/setAuth', data)
      } catch (err) {
        console.error("Failure!");
        console.error(err.response.status);
      }*/
    }
  }
};
</script>