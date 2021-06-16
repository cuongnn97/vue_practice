import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
createApp(App).use(router).use(store).mount('#app')
