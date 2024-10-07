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
      this.$emit('text-sent', this.inputText); // envía el texto al componente parent
      this.inputText = ''; // limpia el campo de texto
    },
  },
};
</script>

<style scoped>
.child-container {
  padding: 20px; 
  border: 1px solid #28a745; 
  border-radius: 10px; 
  background-color: #fff; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  margin-top: 20px; 
}

input {
  margin-bottom: 10px; 
}
</style>