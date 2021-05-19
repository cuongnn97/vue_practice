<template>
  <div class="products">
    <h1>Products</h1>
    <div v-for="item in $store.getters.products" :key="item.id">
      <span>{{ item.name }}</span>
      <button @click="addToCart(item.id)" type="button">
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('loadProducts')
  },
  methods: {
    addToCart(id) {
      axios.patch('http://localhost:8000/products/' + id, {
        carted: true
      })
      this.$store.dispatch('loadProducts')
      this.$store.dispatch('cartedProducts')
    }
  },
  computed: {
    todos() {
      return this.$store.state.products
    }
  }
}
</script>
<style>
.products {
  float: left;
  width: 50%;
  background-color: aqua;
}
</style>
