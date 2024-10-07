import { mount } from '@vue/test-utils';
import Ejercicio1View from '@/components/Ejercicio1View.vue'; // Importa tu componente
import store from '@/store'; // Importa tu store de Vue

describe('Ejercicio1View.vue', () => {
  test('debería renderizar el componente y mostrar el contador', () => {
    const wrapper = mount(Ejercicio1View, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.text()).toContain('Contador: 0');
  });

  test('debería incrementar el contador cuando se hace clic en el botón', async () => {
    const wrapper = mount(Ejercicio1View, {
      global: {
        plugins: [store],
      },
    });

    // Simula el clic en el botón de incrementar
    await wrapper.find('button:first-of-type').trigger('click');

    // Verifica que el contador haya incrementado
    expect(wrapper.text()).toContain('Contador: 1');
  });
});
