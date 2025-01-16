<template>
    <div>
      <h1>Reduceri</h1>
      <ul>
        <li v-for="reducere in reduceri" :key="reducere.id">
          <img :src="reducere.image" alt="Reducere" />
          <p>{{ reducere.description }}</p>
          <span>Preț vechi: {{ reducere.oldPrice }} | Preț nou: {{ reducere.newPrice }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['reduceri'])
    },
    created() {
      this.fetchReduceri();
    },
    methods: {
      ...mapActions(['fetchReduceri'])
    }
  };
  </script>