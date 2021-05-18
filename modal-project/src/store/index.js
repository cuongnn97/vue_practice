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
    }
  },
  mutations: {
    SET_Products(state, products) {
      const notCartedProducts = products.filter(product => !product.carted);
      state.products = notCartedProducts;
    },
    SET_CartedProducts(state, products) {
      const cartedProducts = products.filter(product => product.carted);
      state.carted = cartedProducts
      state.counter = cartedProducts.length;
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

          commit('SET_Products', products)
        })
    },
    cartedProducts({ commit }) {
      axios
        .get('http://localhost:8000/products', {
          headers: {
            'Ocp-Apim-Subscription-Key': 'your key',
          }
        })
        .then(response => response.data)
        .then(products => {

          commit('SET_CartedProducts', products)
        })
    },
    changeCounter({ commit }) {
      commit('setProducts',2)
    }
  },
});
