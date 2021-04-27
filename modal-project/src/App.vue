<template>
  <div>
    <h1>{{title}}</h1>
    <p>Welcome....</p>
    <div v-if="showModal">
      <Modal :header="header" :text="title" theme="sale" @close="handleClick">
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        <h1>Slot example</h1>
        <p>Slot example pppp</p>
      </Modal>
    </div>
    <div v-if="showModal2">
      <Modal :header="header" :text="title" theme="" @close="handleClick2">
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        <h1>Modal two</h1>
        <p>Modal two pppp</p>
      </Modal>
    </div>
    <button @click="handleClick">open modal</button>
    <button @click="handleClick2">open modal 2</button>
  </div>

</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "My First Vue App",
      header: 'Sign up for the Giveaway',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      this.showModal = !this.showModal;
      this.showModal2 = false;
    },
    handleClick2() {
      this.showModal2 = !this.showModal2;
      this.showModal = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
