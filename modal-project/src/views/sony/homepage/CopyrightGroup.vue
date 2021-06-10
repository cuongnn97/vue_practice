<template>
  <div>
    <div class="title">
      <h2>
        グループ所有の著作権一覧
        <a class="primary-button" href="/groups/new">グループ登録</a>
      </h2>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
body {
  font-family: sans-serif;
}
h2 {
  text-align: left;
  margin: 0;
  width: 100%;
  margin-bottom: 1rem;
}
.title {
  margin-top: 1.5rem;
}
.title a {
  float: right;
  display: block;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
}
</style>
