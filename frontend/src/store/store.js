import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    sortimente: [],
    reduceri: [],
    specialitati: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    setSortimente(state, sortimente) {
      state.sortimente = sortimente;
    },
    setReduceri(state, reduceri) {
      state.reduceri = reduceri;
    },
    setSpecialitati(state, specialitati) {
      state.specialitati = specialitati;
    }
  },
  actions: {
    async fetchSortimente({ commit }) {
      try {
        const response = await axios.get('/api/toateSortimentele');
        commit('setSortimente', response.data);
      } catch (error) {
        console.error('Eroare la preluarea sortimentelor:', error);
      }
    },
    async fetchReduceri({ commit }) {
      try {
        const response = await axios.get('/api/reduceri');
        commit('setReduceri', response.data);
      } catch (error) {
        console.error('Eroare la preluarea reducerilor:', error);
      }
    },
    async fetchSpecialitati({ commit }) {
      try {
        const response = await axios.get('/api/specialitati');
        commit('setSpecialitati', response.data);
      } catch (error) {
        console.error('Eroare la preluarea specialităților:', error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/api/login', credentials);
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Eroare la autentificare:', error);
      }
    },
    async logout({ commit }) {
      await axios.post('/api/logout');
      commit('clearUser');
    }
  },
  getters: {
    isAuthenticated: state => !!state.user
  }
});