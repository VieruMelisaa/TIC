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