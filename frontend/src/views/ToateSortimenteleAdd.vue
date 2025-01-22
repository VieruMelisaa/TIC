<template>
    <div class="add-sortiment-container">
      <h1 class="add-sortiment-title">Adauga un sortiment nou</h1>
  
      <form @submit.prevent="submit" class="add-sortiment-form">
        <div class="form-group">
          <label>URL:</label>
          <input v-model="sortiment.image" required class="form-input" />
        </div>
  
        <div class="form-group">
          <label>Descriere</label>
          <textarea v-model="sortiment.description" required class="form-input" ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Adauga Sortiment</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        sortiment: {
            image: '',
            description: '',
        }
      };
    },
    methods: {
      ...mapActions(['createSortiment']),
  
      async submit() {
        try {
          await this.createSortiment(this.sortiment);
          this.$router.push('/toateSortimentele');
        } catch (error) {
          console.error('Error adding', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .add-sortiment-container {
    max-width: 500px;
    margin: 2rem auto;
    background: #f8c8dc;
    border-radius: 8px;
    padding: 2rem;
    color: #5a3e36;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .add-sortiment-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .add-sortiment-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  label {
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #7a5c4f;
  }
  
  .form-input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #fbdbe7;
    border-radius: 4px;
    background: #ffe6f2;
    color: #5a3e36;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #d8b3c5;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    display: block;
    margin: 1rem auto 0;
  }
  
  .btn-primary {
    background-color: #b87333;
    color: #fff5e1;
  }
  .btn-primary:hover {
    background-color: #a05a2c;
  }
  
  body {
  background: url('https://i.pinimg.com/736x/d7/dc/bd/d7dcbd46c54c32380f5eba9b79138b08.jpg');
  background-size: cover;
}

  </style>

  