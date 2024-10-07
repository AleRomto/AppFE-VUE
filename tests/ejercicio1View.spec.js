import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { nextTick } from 'vue';
import Ejercicio1View from '@/components/Ejercicio1View.vue';

// store reinicia el contador en cada prueba
let store;
beforeEach(() => {
  store = createStore({
    state() {
      return {
        contador: 0,
      };
    },
    mutations: {
      incrementar(state) {
        state.contador++;
      },
      decrementar(state) {
        state.contador--;
      },
    },
    actions: {
      incrementarContador({ commit }) {
        commit('incrementar');
      },
      decrementarContador({ commit }) {
        commit('decrementar');
      },
    },
    getters: {
      getCount(state) {
        return state.contador;
      },
    },
  });
});

describe('Ejercicio1View.vue', () => {
  test('a. debería recibir un valor inicial en el contador', () => {
    const wrapper = mount(Ejercicio1View, {
      global: {
        plugins: [store],
      },
    });

    // se asegura de que empiece en 0
    expect(wrapper.text()).toContain('Valor del contador: 0');
  });

  test('b. debería incrementar el contador cuando se hace clic en el botón', async () => {
    const wrapper = mount(Ejercicio1View, {
      global: {
        plugins: [store],
      },
    });

    // simulanding los clicks
    await wrapper.find('.btn-success').trigger('click');
    await nextTick();  

    // verifica que el contador se actualice
    expect(wrapper.text()).toContain('Valor del contador: 1');
  });

  test('c. debería decrementar el contador cuando se hace clic en el botón', async () => {
    const wrapper = mount(Ejercicio1View, {
      global: {
        plugins: [store],
      },
    });

    // clic en el botón de incrementar primero
    await wrapper.find('.btn-success').trigger('click'); 
    await nextTick();  
    expect(wrapper.text()).toContain('Valor del contador: 1');

    // clic en el botón de decrementar
    await wrapper.find('.btn-danger').trigger('click');  
    await nextTick();  

    // verifica que el contador decrementa a 0
    expect(wrapper.text()).toContain('Valor del contador: 0');
  });
});
