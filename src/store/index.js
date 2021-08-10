import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nbBooks: 0
  },
  mutations: {
    addBook(state){
      state.nbBooks++
    },
    deleteBook(state){
      state.nbBooks--
    },
    updateBook(state, nbListBooks){
      state.nbBooks = nbListBooks;
    },
  },
  actions: {},
  modules: {},
});
