import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: [],
    counter: 0,
    carted: []
  },
  getters: {
    products: state => {
      return state.products;
    },
    counter: state => {
      return state.counter;
    }
  },
  mutations: {
    SET_CartedProducts(state, products) {
      state.carted = products;
      state.counter = products.length;
    },
    SET_Products(state, products) {
      state.products = products;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get('http://localhost:8000/products', {
          headers: {
            'Ocp-Apim-Subscription-Key': 'your key',
          }
        })
        .then(response => response.data)
        .then(products => {
          commit('SET_Products', products.filter(product => !product.carted))
          commit('SET_CartedProducts', products.filter(product => product.carted))
        })
    },
  },
});
