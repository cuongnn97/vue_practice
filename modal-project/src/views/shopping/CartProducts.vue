<template>
  <div class="products_cart">
    <h1>On Cart</h1>
    <div v-for="item in $store.state.carted" :key="item.id">
      <span>{{ item.name }}</span>
      <button @click="deleteCart(item.id)" type="button">
        Delete
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
      carted: this.$store.state.carted,
      string: this.$store.state.counter
    }
  },
  created() {
    this.$store.dispatch('loadProducts')
  },
  methods: {
    deleteCart(id) {
      axios.patch('http://localhost:8000/products/' + id, {
        carted: false
      })
      this.$store.dispatch('loadProducts')
    }
  },
  computed: {}
}
</script>
<style>
.products_cart {
  float: left;
  width: 50%;
  background-color: burlywood;
}
</style>
