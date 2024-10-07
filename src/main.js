// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Asegúrate de importar el store

createApp(App)
  .use(router)
  .use(store) // Usa el store de Vuex
  .mount('#app');


