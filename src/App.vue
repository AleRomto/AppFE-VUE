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
    <router-view /> 
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import Ejercicio1View from './components/Ejercicio1View.vue';
import ParentView from './components/ParentView.vue'; 

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
  background-color: #f4f4f4; 
  margin: 0;
  padding: 0;
}

.navbar {
  margin-bottom: 20px;
}

.nav-link {
  margin-right: 15px; 
}

.navbar-brand {
  font-weight: bold; 
}

h1 {
  color: #333;
}
</style>

