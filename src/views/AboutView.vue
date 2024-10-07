<template>
  <div class="about-container">
    <div class="card">
      <div class="card-header text-center">
        <h2>Sobre la Aplicación</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">Nuestra Misión</h5>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nihil officia odit unde qui in dolor possimus ipsam mollitia, nisi
          harum. Hic distinctio culpa ut cum, eum placeat aspernatur quas!
        </p>
        <h5 class="card-title">¿Qué Hacemos?</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          iusto excepturi eveniet atque! Molestias corrupti, laudantium
          repudiandae quisquam nesciunt ipsam veniam perspiciatis ipsum minima
          ab consectetur voluptatum sint enim. Sunt.
        </p>
        <router-link to="/" class="btn btn-primary"
          >Volver al Inicio</router-link
        >
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
  padding: 50px 20px;
  background-color: #e9ecef;
}

.card {
  margin: auto;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.02);
}

.card-header {
  background-color: #007bff;
  color: white;
}
</style>
