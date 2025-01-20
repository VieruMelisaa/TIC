import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/Home.vue";
import ToateSortimentele from "../views/ToateSortimentele.vue";
import Reduceri from "../views/Reduceri.vue";
import Specialitati from "../views/Specialitati.vue";
import ToateSortimenteleAdd from "../views/ToateSortimenteleAdd.vue";
import ToateSortimenteleEdit from "../views/ToateSortimenteleEdit.vue";
import ToateSortimenteleGenerate from "../views/ToateSortimenteleGenerate.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/toateSortimentele", component: ToateSortimentele },
  { path: "/reduceri", component: Reduceri },
  { path: "/specialitati", component: Specialitati },
  { path: "/toateSortimentele/add", component: ToateSortimenteleAdd },
  { path: "/toateSortimentele/edit/:id", component: ToateSortimenteleEdit, props: true },
  { path: "/toateSortimentele/generate", component: ToateSortimenteleGenerate }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;