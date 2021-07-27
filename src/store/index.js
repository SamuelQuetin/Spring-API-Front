import { createStore } from "vuex";

export default  createStore({
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
