import { createStore } from 'vuex';

export default createStore({
  state: {
    contador: 0,
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