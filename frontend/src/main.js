import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

import { initializeFirebaseApp } from './service/firebase'

initializeFirebaseApp();

store.dispatch('initializeAuth');
createApp(App).use(store).use(router).mount('#app')
