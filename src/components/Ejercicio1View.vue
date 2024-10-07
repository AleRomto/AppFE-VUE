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
  padding: 20px; 
  border: 1px solid #007bff; 
  border-radius: 10px; 
  background-color: #f8f9fa; 
  max-width: 400px; 
  margin: 20px auto; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  text-align: center; 
}

.button-group {
  display: flex; 
  justify-content: center; 
  gap: 10px; 
}

button {
  min-width: 100px;
}
</style>