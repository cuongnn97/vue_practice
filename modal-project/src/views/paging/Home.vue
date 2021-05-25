<template>
  <div v-for="item in dataOffSet" :key="item.id">
    <span>{{ item.id }}</span>
  </div>
  <Pagination
    :totalPages="paginations.length / perPage"
    :perPage="perPage"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<script>
import Pagination from './Pagination'
import axios from 'axios'

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
      .get('http://localhost:8000/paging?', {
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
      const dataOffSet = this.paginations.slice(
        (page - 1) * 10,
        this.perPage * page
      )
      this.dataOffSet = dataOffSet
    }
  },
  components: {
    Pagination
  }
}
</script>
