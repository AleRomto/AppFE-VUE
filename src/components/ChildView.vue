<template>
  <div class="child-container">
    <h3>Componente Child</h3>
    <input v-model="inputText" placeholder="Ingresa un texto"  class="form-control" />
  
    <button @click="sendText" class="btn btn-primary">Enviar Texto</button>
  </div>
</template>

<script>
export default {
  name: 'ChildView',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    sendText() {
      this.$emit('text-sent', this.inputText); // Emite el texto al componente padre
      this.inputText = ''; // Limpia el campo de texto
    },
  },
};
</script>

<style scoped>
.child-container {
  padding: 20px; /* Espaciado interno */
  border: 1px solid #28a745; /* Borde verde */
  border-radius: 10px; /* Bordes redondeados */
  background-color: #fff; /* Color de fondo blanco */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin-top: 20px; /* Margen superior */
}

input {
  margin-bottom: 10px; /* Espaciado inferior para el input */
}
</style>