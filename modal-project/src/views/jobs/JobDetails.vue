<template>
  <h1>Job Details</h1>
  <!-- <p>The job id is {{ $route.params.id }}</p> -->
  <p>The job id is {{ id }}</p>
  <p>The job name is {{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
    }
  }
}
</script>

<style>
</style>
