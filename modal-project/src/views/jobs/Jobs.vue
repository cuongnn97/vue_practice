
<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'JobDetails', params: { id: job.id, name:job.details }}">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Job 1', id: 1, details: 'lorem1' },
        { title: 'Job 2', id: 2, details: 'lorem2' },
        { title: 'Job 3', id: 3, details: 'lorem3' },
        { title: 'Job 4', id: 4, details: 'lorem4' },
        { title: 'Job 5', id: 5, details: 'lorem5' },
        { title: 'Job 6', id: 6, details: 'lorem6' },
        { title: 'Job 7', id: 7, details: 'lorem7' },
      ],
    }
  }
}
</script>

<style scoped>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>
