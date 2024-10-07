<template>
  <div class="parent-container">
    <h2>Componente Parent</h2>
    <ChildView @text-sent="receiveText" />
    <p>Texto recibido: {{ receivedText }}</p>
  </div>
</template>

<script>
import ChildView from './ChildView.vue'; // importa ChildView

export default {
  name: 'ParentView',
  components: {
    ChildView,
  },
  data() {
    return {
      receivedText: '',
    };
  },
  methods: {
    receiveText(text) {
      this.receivedText = text; // guarda el texto recibido
    },
  },
};
</script>

<style scoped>
.parent-container {
  padding: 20px;
  border: 1px solid #007bff; 
  border-radius: 10px; 
  background-color: #f8f9fa;
  max-width: 600px; 
  margin: 20px auto; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}
</style>