<template>
  <div>
    <input type="text" v-model="$store.state.counter"/>
    <Products />
    <CartProducts />
  </div>
</template>

<script>
import Products from './Products'
import CartProducts from './CartProducts'
export default {
  data() {
    return {
      cart: 0
    }
  },
  components: {
    Products,
    CartProducts
  }
}
</script>
