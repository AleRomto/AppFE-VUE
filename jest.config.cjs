/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'node',
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Asegúrate de que la expresión regular sea correcta
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};