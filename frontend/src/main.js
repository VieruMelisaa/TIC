import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';

store.dispatch('initializeAuth');
store.dispatch('fetchSortimente'); 
store.dispatch('fetchReduceri'); 
store.dispatch('fetchSpecialitati'); 

const app = createApp(App);
app.use(store).use(router).mount('#app');
