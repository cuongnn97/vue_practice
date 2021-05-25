<template>
  <div>
    <h1>{{ counter }}</h1>
    <Products />
    <CartProducts />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  },
  computed: mapState(['counter'])
}
</script>
