module.exports = {
    preset: '@vue/vue3-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Asegúrate de que Babel esté configurado para tus archivos JS/TS
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue', 'json', 'node'],
  };
  