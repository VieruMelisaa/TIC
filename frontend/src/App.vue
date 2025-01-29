<template>
  <div id="app">
    <LoginSignupComponent />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import LoginSignupComponent from './components/LoginSignupComponent.vue';
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginSignupComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-top: 20px;
}
</style>

