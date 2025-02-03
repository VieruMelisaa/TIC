<template>
    <div class="home-container">
      <h1 class="home-title">Bine ai venit!</h1>
  
      <div class="nav-buttons">
        <router-link to="/toateSortimentele" class="btn btn-primary">Vezi toate sortimentele</router-link>
        <router-link
          v-if="isAdmin"
          to="/toateSortimentele/generate"
          class="btn btn-primary"
        >
          Genereaza un sortiment
        </router-link>
        <router-link
          v-if="isAdmin"
          to="/toateSortimentele/add"
          class="btn btn-primary"
        >
          Adauga un sortiment
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'HomeView',
    computed: {
      ...mapGetters(['isAdmin']),
    },
  };
  </script>
  
  
  <style scoped>
  .home-container {
    text-align: center;
    padding: 40px 20px;
    /* background: url('https://i.pinimg.com/736x/00/07/13/00071382ec7fbf953574260a802f0828.jpg') no-repeat center center/cover; */
    background: url('https://img.freepik.com/premium-photo/elegant-patisserie-background-with-croissants-butter-jam_818261-60802.jpg?w=1060') no-repeat center center/cover;
    min-height: 74.5vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  
  .home-title {
    font-size: 7rem;
    color: black;
    text-shadow: 2px 2px 4px white;
    margin-bottom: 1.5rem;
  }
  
  .nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 300px;
    width: 100%;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #8b4513;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    background-color: #f4c2c2; 
    color: #8b4513; 
  }
  
  .btn:hover {
    background-color: #e6b8b8;
  }
  </style>
  