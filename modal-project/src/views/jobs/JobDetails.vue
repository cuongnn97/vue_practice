<template>
  <h1>Job Details</h1>
  <p>The job id is {{ id }}</p>
  <p>The job name is {{ name }}</p>
  <p>The provide test is {{ provider }}</p>
</template>

<script>
export default {
  inject: ['todoLength'],
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      provider: this.todoLength
    }
  }
}
</script>

<style>
</style>
