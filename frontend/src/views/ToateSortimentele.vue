<template>
    <div class="app-container">
      <main class="frame">
        <section class="sortiment-grid">
          <div
            v-for="sort in sortimente"
            :key="sort.id"
            class="sortiment-card"
          >
            <img :src="sort.image" alt="Sortiment" class="sortiment-image" />
  
            <div class="sortiment-details">
              <p  class="sortiment-description">{{ sort.description }}</p>
            </div>
  
            <div v-if="isAdmin" class="sortiment-actions">
              <button @click.stop="editSortiment(sort)" class="btn btn-edit">Edit</button>
              <button @click.stop="theDeletePopup(sort.id)" class="btn btn-delete">Delete</button>
            </div>
          </div>
        </section>
      </main>
  
      <DeleteSortimentPopup
        v-if="popupVisible"
        :popupVisible="popupVisible"
        :sortimentId="sortimentIdToDelete"
        @delete="deleteSortiment"
        @cancel="closePopup"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import DeleteSortimentPopup from '../components/DeleteSortimentPopup.vue';
  
  export default {
    components: { DeleteSortimentPopup },
   
    data() {
      return {
        popupVisible: false,
        sortimentIdToDelete: null,
      };
    },
    computed: {
      ...mapGetters(['getSortimente', 'isAdmin']),
      sortimente() {
        return this.getSortimente;
      },
    },
    methods: {
      theDeletePopup(id) {
        this.popupVisible = true;
        this.sortimentIdToDelete = id;
      },
      closePopup() {
        this.popupVisible = false;
        this.sortimentIdToDelete = null;
      },
      async deleteSortiment(id) {
        try {
          await this.$store.dispatch('deleteSortiment', id);
          this.closePopup();
        } catch (error) {
          console.error('Eroare in stergere:', error);
        }
      },
    editSortiment(sort) {
      if (sort && sort.id) {
        this.$router.push({ name: 'Editare Sortiment', params: { id: sort.id } });
      } else {
        console.error('ID-ul sortimentului este invalid.');
      }
    },
    },
    async mounted() {
      try {
        await this.$store.dispatch('fetchSortimente');
      } catch (error) {
        console.error('Eroare in a face fetch la sortimente:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f8e1e1;
    font-family: Arial, sans-serif;
    color: #5a3e36;
  }
  
  .app-title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  
  .frame {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sortiment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
  }
  
  .sortiment-card {
    position: relative;
    background: #f2d1c9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(90, 62, 54, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.6s forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .sortiment-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(90, 62, 54, 0.2);
  }
  
  .sortiment-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .sortiment-details {
    padding: 15px;
    text-align: center;
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  .sortiment-description {
    font-size: 0.9rem;
    color: #7a4f42;
  }
  
  .sortiment-actions {
    display: flex;
    justify-content: space-around;
    position: relative;
    width: 100%;
    padding: 10px;
    border-top: 1px solid #c9a49b;
    background: #f2d1c9;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #8b5a4a;
    color: #f8e1e1;
  }
  
  .btn-edit:hover {
    background-color: #6d4136;
  }
  
  .btn-delete {
    background-color: #5a3e36;
    color: #f8e1e1;
  }
  
  .btn-delete:hover {
    background-color: #3e2923;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .sortiment-grid {
      grid-template-columns: 1fr;
    }
    .sortiment-card {
      margin-bottom: 20px;
    }
  }
  </style>