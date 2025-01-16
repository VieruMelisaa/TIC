import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';

store.dispatch('initializeAuth'); 

const app = createApp(App);
app.use(store).use(router).mount('#app');

// index.js (configurare router)
import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/Home.vue";
import ToateSortimentele from "../views/ToateSortimentele.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/toateSortimentele", component: ToateSortimentele }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;