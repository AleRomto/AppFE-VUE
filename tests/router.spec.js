import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from '@/App.vue'; // Verifica que esta ruta sea correcta
import router from '@/router'; // Asegúrate de importar tu router correctamente

describe('Router', () => {
  let app;

  beforeEach(() => {
    app = createApp(App);
    app.use(router);
    router.push('/'); // Asegúrate de empujar a la ruta deseada
    return router.isReady(); // Espera a que el router esté listo
  });

  it('debería contener la ruta "/"', () => {
    expect(router.getRoutes().some(route => route.path === '/')).toBe(true);
  });

  it('debería contener la ruta "/about"', () => {
    expect(router.getRoutes().some(route => route.path === '/about')).toBe(true);
  });
});
