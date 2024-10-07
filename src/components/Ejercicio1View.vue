<template>
  <div class="counter-container">
    <h2>Contador</h2>
    <p>Valor del contador: {{ count }}</p>
    <div class="button-group">
      <button @click="incrementarContador" class="btn btn-success">Incrementar</button>
      <button @click="decrementarContador" class="btn btn-danger">Decrementar</button>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Ejercicio1View',
  computed: {
    ...mapGetters(['getCount']),
    count() {
      return this.getCount;
    },
  },
  methods: {
    ...mapActions(['incrementarContador', 'decrementarContador']),
  },
};
</script>

<style scoped>
.counter-container {
  padding: 20px; /* Espaciado interno */
  border: 1px solid #007bff; /* Borde azul */
  border-radius: 10px; /* Bordes redondeados */
  background-color: #f8f9fa; /* Color de fondo claro */
  max-width: 400px; /* Máxima anchura */
  margin: 20px auto; /* Centrado en la página */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  text-align: center; /* Centra el texto */
}

.button-group {
  display: flex; /* Usa flexbox para alinear los botones */
  justify-content: center; /* Centra los botones horizontalmente */
  gap: 10px; /* Espaciado entre los botones */
}

button {
  min-width: 100px; /* Ancho mínimo para los botones */
}
</style>