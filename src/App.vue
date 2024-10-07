<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Apps</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ejercicio1">Contador</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/parent">Parent/Child</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <router-view /> <!-- Este es el punto donde se cargarán las vistas -->
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import Ejercicio1View from './components/Ejercicio1View.vue'; // Importa Ejercicio1View
import ParentView from './components/ParentView.vue'; // Importa ParentView

export default {
  name: 'App',
  components: {
    HomeView,
    AboutView,
    Ejercicio1View,
    ParentView,
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4; /* Color de fondo suave */
  margin: 0;
  padding: 0;
}

.navbar {
  margin-bottom: 20px; /* Espacio en la parte inferior del navbar */
}

.nav-link {
  margin-right: 15px; /* Espacio entre los enlaces */
}

.navbar-brand {
  font-weight: bold; /* Negrita para el nombre de la aplicación */
}

h1 {
  color: #333; /* Color del texto */
}
</style>

