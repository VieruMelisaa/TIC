<template>
    <div v-if="popupVisible" class="modal-overlay">
      <div class="modal">
        <h3>Esti sigur ca vrei sa stergi acest sortiment?</h3>
        <div class="modal-actions">
          <button @click="confirmDelete">Da</button>
          <button @click="cancelDelete">Nu</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      popupVisible: {
        type: Boolean,
        required: true,
      },
      sortimentId: {
        type: String,
        required: true,
      },
    },
    methods: {
      confirmDelete() {
        this.$emit('delete', this.sortimentId);
      },
      cancelDelete() {
        this.$emit('cancel');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background-color: #1e1e1e; 
    color: #fff;              
    padding: 20px;
    border-radius: 8px;
    width: 300px;             
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  
  .modal-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .modal-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-confirm {
    background-color: #2196f3;
    color: #fff;
  }
  
  .btn-confirm:hover {
    background-color: #1769aa;
  }
  
  .btn-cancel {
    background-color: #444;
    color: #fff;
  }
  
  .btn-cancel:hover {
    background-color: #333;
  }
  </style>