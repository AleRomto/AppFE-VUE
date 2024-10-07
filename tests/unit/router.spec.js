import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from '@/App.vue'; 
import router from '@/router'; 

describe('Router', () => {
  let app;

  beforeEach(() => {
    app = createApp(App);
    app.use(router);
    router.push('/'); 
    return router.isReady(); 
  });

  it('debería contener la ruta "/"', () => {
    expect(router.getRoutes().some(route => route.path === '/')).toBe(true);
  });

  it('debería contener la ruta "/about"', () => {
    expect(router.getRoutes().some(route => route.path === '/about')).toBe(true);
  });
});
