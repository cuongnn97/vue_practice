<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'SignupForm' }">SignupForm</router-link> |
    <router-link :to="{ name: 'Calculator' }">Calculator</router-link> |
    <router-link :to="{ name: 'Homepage' }">Homepage</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link>
  </div>
  <Table :data="dataOffSet" />
  <Pagination
    :totalPages="paginations.length / perPage"
    :perPage="perPage"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<script>
import axios from 'axios'
import Pagination from './Pagination'
import Table from './Table'

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      paginations: [],
      perPage: 10,
      dataOffSet: []
    }
  },
  created() {
    axios
      .get('http://localhost:8000/paging', {
        headers: {
          'Ocp-Apim-Subscription-Key': 'your key'
        }
      })
      .then(response => {
        this.paginations = response.data
        this.getDataOffSet(1)
      })
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
      this.getDataOffSet(page)
    },
    getDataOffSet(page) {
      let dataOffSet = this.paginations.slice(
        (page - 1) * 10,
        this.perPage * page
      )
      this.dataOffSet = dataOffSet
    }
  },
  components: {
    Pagination,
    Table
  }
}
</script>
