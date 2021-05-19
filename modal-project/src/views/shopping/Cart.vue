<template>
  <div>
    <h1>{{$store.getters.counter}}</h1>
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
