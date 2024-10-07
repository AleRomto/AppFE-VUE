<template>
  <div class="home-container">
    <div class="jumbotron text-center">
      <h1 class="display-4">Bienvenido a Aplicación</h1>
      <p class="lead">Explora nuestras características y funcionalidades.</p>
      <hr class="my-4" />
      <p>Usa el menú de navegación para acceder a las diferentes secciones.</p>
      <router-link to="/about" class="btn btn-primary btn-lg">Acerca de</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  padding: 50px 20px; 
  background-color: #f0f8ff; 
}

.jumbotron {
  background-color: #ffffff; 
  border-radius: 10px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s; 
}

.jumbotron:hover {
  transform: scale(1.02); 
}
</style>