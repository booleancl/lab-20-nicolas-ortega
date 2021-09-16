<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginPage v-on:notify="notify"/>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  created() {
      this.$authService.setAuth(true);
  },
  components: {
    LoginPage
  },
    methods:{
      notify(value){
          console.log(value)
      }
    },
    member(data){
      console.log(data)
    }
}
</script>

