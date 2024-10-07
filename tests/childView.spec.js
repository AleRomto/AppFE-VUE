import { mount } from '@vue/test-utils';
import { createApp } from 'vue';
import ChildView from '@/components/ChildView.vue'; 

describe('ChildView.vue', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = mount(ChildView);
    expect(wrapper.exists()).toBe(true);
  });
});
