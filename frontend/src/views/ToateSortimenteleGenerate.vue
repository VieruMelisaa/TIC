<template>
    <div class="generate-container">
      <p v-if="message" class="message">Obiect generat cu succes!</p>
      <button v-if="message" @click="goToSortimente" class="go-button">Vezi Toate Sortimentele</button>
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
    async mounted() {
      try {
        if (!this.$store.state.idToken) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
  
        const response = await this.generateSortimente();
        if (response?.status === 201) {
          this.message = 'Obiect generat cu succes!';
          setTimeout(() => {
            this.$router.push('/toateSortimentele');
          }, 2000);
        }
      } catch (error) {
        this.message = 'Eroare la generare';
      }
    },
    methods: {
      ...mapActions(['generateSortimente']),
      goToSortimente() {
        this.$router.push('/toateSortimentele');
      }
    },
  };
  </script>
  
  <style scoped>
  .generate-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://i.pinimg.com/736x/a3/53/e5/a353e5752b5172a78a37996e128da52b.jpg');
    background-size: cover;
    background-position: center;
    flex-direction: column;
  }
  
  .message {
    font-size: 1.5rem;
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
    font-size: 1rem;
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
  