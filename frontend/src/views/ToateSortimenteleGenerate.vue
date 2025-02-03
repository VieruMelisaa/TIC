<template>
    <div class="generate-container">
      <p v-if=message class="message">{{message}}</p>
      <button v-if=message  @click="goToSortimente" class="go-button">Vezi Toate Sortimentele</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
      ...mapActions(['generateSortimente']),
      goToSortimente() {
        this.$router.push('/toateSortimentele');
      }
    },
    async mounted() {

      try {

        const response = await this.generateSortimente();
        
        this.message = 'Obiect generat cu succes!';
          setTimeout(() => {
            this.$router.push('/toateSortimentele');
          }, 2000);
        
      } catch (error) {
        this.message = 'Eroare la generare';
      }
    },
  
  };
  </script>
  
  <style scoped>
  .generate-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84.7vh;
    background-image: url('https://img.freepik.com/premium-photo/bakery-with-display-pastries-pastries_1315312-97296.jpg?w=1060');
    background-size: cover;
    background-position: center;
    flex-direction: column;
  }
  
  .message {
    font-size: 2.5rem;
    color: #8b4513;
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .go-button {
    padding: 10px 20px;
    font-size: 2rem;
    color: #8b4513; 
    background-color: #f2d1b3; 
    border: 2px solid #8b4513;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .go-button:hover {
    background-color: #e0b68b; 
  }
  </style>
  