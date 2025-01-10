<template>
    <div>
      <h2>Autentificare</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Parola" />
      <button @click="login">Autentifică-te</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return { 
        email: '', 
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      async login() {
        try {
          await this.$store.dispatch('login', { email: this.email, password: this.password });
        } catch (error) {
          this.errorMessage = 'Eroare la autentificare. Verifică datele introduse.';
        }
      }
    }
  };
  </script>
  