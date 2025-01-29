<template>
    <header class="header">
      <h1 class="app-title">Cont</h1>
      <div class="header-actions">

        <span v-if="isAuthenticated && user" class="user-info">
          Loggat ca : <strong>{{ user.email }}</strong>
        </span>
  
        <button v-if="!isAuthenticated" @click="openLoginModal" class="btn btn-login">Login</button>
  
        <button v-if="isAuthenticated" @click="doLogout" class="btn btn-logout">Logout</button>
      </div>
    </header>
  
    <div v-if="isLoginModalVisible" class="modal-overlay" @click="closeLoginModal">
      <div class="modal" @click.stop>
        <h3>Login</h3>
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Pass:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="modal-actions">
            <button type="submit" class="btn btn-login">Submit</button>
            <button type="button" @click="closeLoginModal" class="btn btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        isLoginModalVisible: false,
        email: '',
        password: '',
      };
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'user']),
    },
    methods: {
      ...mapActions(['login', 'logout']),
      openLoginModal() {
        this.isLoginModalVisible = true;
      },
      closeLoginModal() {
        this.isLoginModalVisible = false;
        this.email = '';
        this.password = '';
      },
      async handleLogin() {
        try {
          await this.login({ email: this.email, password: this.password });
          alert('Login successful!');
          this.closeLoginModal();
        } catch (error) {
          console.error('Login error:', error);
          alert('Login failed: ' + error.message);
        }
      },
      async doLogout() {
        try {
          await this.logout();
        } catch (error) {
          console.error('Logout error:', error);
        }
      },
    },
  };
  </script>
  
 <style scoped>
/* Culori ciocolată și bej inversate */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5D4037; /* Ciocolată */
  color: #F5E1C0; /* Bej */
  padding: 15px 20px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  font-size: 0.9rem;
}

/* Butoane */
.btn {
  padding: 8px 16px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login {
  background-color: #6D4C41;
  color: #F5E1C0;
}

.btn-login:hover {
  background-color: #4E342E;
}

.btn-logout {
  background-color: #F3E5AB;
  color: #5D4037;
}

.btn-logout:hover {
  background-color: #E6D8A7;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #3E2723;
  color: #F5E1C0;
  padding: 25px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.btn-cancel {
  background-color: #F44336;
  color: white;
}

.btn-cancel:hover {
  background-color: #D32F2F;
}
</style>

  