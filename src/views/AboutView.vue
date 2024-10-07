<template>
  <div class="about-container">
    <div class="card">
      <div class="card-header text-center">
        <h2>Sobre Nuestra Aplicación</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">Nuestra Misión</h5>
        <p class="card-text">
          Proporcionar una plataforma intuitiva y funcional para que los usuarios
          puedan interactuar y aprender más sobre nuestras características.
        </p>
        <h5 class="card-title">¿Qué Hacemos?</h5>
        <p class="card-text">
          Nos enfocamos en crear experiencias de usuario excepcionales y en
          ofrecer un servicio de alta calidad.
        </p>
        <router-link to="/" class="btn btn-primary">Volver al Inicio</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-container {
  padding: 50px 20px; /* Espaciado superior/inferior */
  background-color: #e9ecef; /* Color de fondo suave */
}

.card {
  margin: auto;
  max-width: 600px; /* Máxima anchura para la tarjeta */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  transition: transform 0.3s; /* Efecto de transición */
}

.card:hover {
  transform: scale(1.02); /* Efecto de escalado al pasar el mouse */
}

.card-header {
  background-color: #007bff; /* Color de fondo azul para el encabezado */
  color: white; /* Color de texto blanco */
}

</style>
