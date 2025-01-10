<template>
    <div>
      <h1>Toate Sortimentele</h1>
      <ul>
        <li v-for="sortiment in sortimente" :key="sortiment.id">
          <img :src="sortiment.image" alt="Sortiment" />
          <p>{{ sortiment.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['sortimente'])
    },
    created() {
      this.fetchSortimente();
    },
    methods: {
      ...mapActions(['fetchSortimente'])
    }
  };
  </script>
  