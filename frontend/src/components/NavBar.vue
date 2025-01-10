<template>
    <nav>
      <ul>
        <li><router-link to="/">Acasă</router-link></li>
        <li><router-link to="/toateSortimentele">Sortimente</router-link></li>
        <li v-if="!user"><router-link to="/login">Autentificare</router-link></li>
        <li v-if="user">
          <span>Bun venit, {{ user.email }}</span>
          <button @click="logout">Deconectare</button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['user']),
    },
    methods: {
      ...mapActions(['logout'])
    }
  };
  </script>