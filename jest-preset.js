module.exports = {
  preset: '@vue/vue3-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'vue', 'json', 'node'],
  collectCoverage: true, // Si deseas habilitar la cobertura de pruebas
};
