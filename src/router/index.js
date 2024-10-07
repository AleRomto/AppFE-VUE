import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Ejercicio1View from '@/components/Ejercicio1View.vue';
import ParentView from '../components/ParentView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/ejercicio1',
    name: 'ejercicio1',
    component: Ejercicio1View,
  },
  {
    path: '/parent',
    name: 'Parent',
    component: ParentView,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

