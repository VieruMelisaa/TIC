import { createStore } from 'vuex';
import axios from 'axios';
import {  signInWithEmailAndPassword,  onAuthStateChanged,  signOut } from '../service/firebase';

// este creata o stare vuex
export default createStore({

  state: {
    user: null, idToken: null,
    role: null, sortimente: [],
  },

  mutations: {

    editSortiment(state, editedSortiment) {
      const index = state.sortimente.findIndex(a => a.id === editedSortiment.id);
      if (index !== -1) {
        state.sortimente.splice(index, 1, editedSortiment);
      }
    },

    deleteSortiment(state, sortimentId) {
        state.sortimente = state.sortimente.filter(sort => sort.id !== sortimentId);
    },

    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.idToken = token;
    },

    setRole(state, role) {
      state.role = role;
    },

    clearUser(state) {
      state.user = null;
      state.idToken = null;
      state.role = null;
    },

    setSortimente(state, sortimente) {
      state.sortimente = sortimente;
    },

    addSortiment(state, sortiment) {
      state.sortimente.push(sortiment);
    },
    
  },
  actions: {

    initializeAuth({ commit, dispatch }) {
      onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          commit('setUser', user);
          commit('setToken', token);
          dispatch('checkUserRole');
        } else {
          commit('clearUser');
        }
      });
    },
  
    async login({ commit, dispatch }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        commit('setUser', user);
        commit('setToken', token);

        await dispatch('checkUserRole');
        return user;
      } catch (error) {
        throw new Error('Login failed: ' + error.message);
      }
    },

    async logout({ commit }) {
      await signOut();
      commit('clearUser');
    },

    async checkUserRole({ state, commit }) {
      if (!state.idToken) {
        commit('setRole', null);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8000/verificare', {
          headers: {
            Authorization: `Bearer ${state.idToken}`,
          },
        });
        commit('setRole', response.data || null);
      } catch (error) {
        console.error('Eroare verificare rol:', error);
        commit('setRole', null);
      }
    },

    async fetchSortimente({ commit }) {
      try {
        const response = await axios.get('http://localhost:8000/toateSortimentele');
        commit('setSortimente', response.data.sortimente);
      } catch (error) {
        console.error('Eroare la fetch la sortimente:', error.message);
      }
    },

    async createSortiment({ state, dispatch }, sortiment) {
      try {
        const data = JSON.parse(JSON.stringify(sortiment));
    
        console.log('sortiment inainte de request:', data);
      
        await axios.post(
          'http://localhost:8000/toateSortimentele/add',
          data,
          {
            headers: {
              Authorization: `Bearer ${state.idToken}`,
              'Content-Type': 'application/json' 
            },
          }
        );
    
        dispatch('fetchSortimente');
      } catch (error) {
        console.error('Error creating sortiment:', error.response?.data || error.message);
      }
    },

    async editSortiment({ commit, state }, sortiment) {
      try {
        const response = await axios.put(`http://localhost:8000/toateSortimentele/edit/${sortiment.id}`, sortiment, {
          headers: {
            Authorization: `Bearer ${state.idToken}`,
          },
        });
        commit('editSortiment', response.data.sortiment);
      } catch (error) {
        console.error('Eroare la incarcarea documentului modificat:', error.message);
      }
    },


    async deleteSortiment({ commit, state }, sortimentId) {

      try {
        await axios.delete(`http://localhost:8000/toateSortimentele/${sortimentId}`, {
          headers: {
            Authorization: `Bearer ${state.idToken}`,
          },
        });
        commit('deleteSortiment', sortimentId);
      } catch (error) {
        console.error('Error deleting sortiment:', error.message);
      }
    },

    async generateSortimente({ state, dispatch  }) {
      try {
    
        const response = await axios.post('http://localhost:8000/toateSortimentele/generate', {}, {
          headers: {
            Authorization: `Bearer ${state.idToken}`,
            'Content-Type': 'application/json' 
          },
        });
        console.log("Raspuns store.js",response);
        if (response.status === 201) {
          dispatch('fetchSortimente');
        }

      } catch (error) {
        console.error('Eroare la generare sortiment:', error.response?.data || error.message);
        throw error;
      }
    }
    
  },

  getters: {
    user: (state) => state.user, isAuthenticated: (state) => !!state.user,  
    isAdmin: (state) => state.role?.rol === 'admin',   getSortimente: (state) => state.sortimente,
  },

});
