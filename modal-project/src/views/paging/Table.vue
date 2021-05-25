<template>
  <h2>Paging Example</h2>
  <table class="table-paging">
    <tr>
      <th width="10%">ID</th>
      <th width="10%">User ID</th>
      <th width="60%">Title</th>
      <th width="20%">Completed</th>
    </tr>
    <tr v-for="item in data" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.userId }}</td>
      <td>{{ item.title }}</td>
      <td><input type="checkbox" id="checkbox" v-model="item.completed"></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: {
      type: Array,
      required: false
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
