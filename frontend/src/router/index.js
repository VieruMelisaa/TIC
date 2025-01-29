import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import ToateSortimentele from "../views/ToateSortimentele.vue";
import Specialitati from "../views/Specialitati.vue";
import Foietaje from "../views/Foietaje.vue";
import Prajituri from "../views/Prajituri.vue";
import Reduceri from "../views/Reduceri.vue";
import ToateSortimenteleAdd from '../views/ToateSortimenteleAdd.vue';
import ToateSortimenteleEdit from '../views/ToateSortimenteleEdit.vue';
import ToateSortimenteleGenerate from '../views/ToateSortimenteleGenerate.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/toateSortimentele", name: 'Toate Sortimentele', component: ToateSortimentele },
  { path: "/specialitati", name: "Specialitati", component: Specialitati },
  { path: "/foietaje", name: "Foietaje", component: Foietaje },
  { path: "/prajituri", name: "Prajituri", component: Prajituri },
  { path: "/reduceri", name: "Reduceri", component: Reduceri },
  { path: '/toateSortimentele/add', name: 'Adaugare Sortiment', component: ToateSortimenteleAdd },
  { path: '/toateSortimentele/edit/:id', name: 'Editare Sortiment', component: ToateSortimenteleEdit, props: true },
  { path: '/toateSortimentele/generate', name: 'Generare Sortiment', component: ToateSortimenteleGenerate },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
