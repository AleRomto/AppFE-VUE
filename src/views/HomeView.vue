<template>
  <div class="home-container">
    <div class="jumbotron text-center">
      <h1 class="display-4">Bienvenido a Mi Aplicación</h1>
      <p class="lead">Explora nuestras características y funcionalidades.</p>
      <hr class="my-4" />
      <p>Usa el menú de navegación para acceder a las diferentes secciones.</p>
      <router-link to="/about" class="btn btn-primary btn-lg">Aprende más</router-link>
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
  padding: 50px 20px; /* Espaciado superior/inferior */
  background-color: #f0f8ff; /* Un color de fondo suave */
}

.jumbotron {
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: transform 0.3s; /* Efecto de transición */
}

.jumbotron:hover {
  transform: scale(1.02); /* Efecto de escalado al pasar el mouse */
}
</style>