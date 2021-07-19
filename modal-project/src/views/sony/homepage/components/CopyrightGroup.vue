<template>
  <div>
    <div class="title">
      <h2>
        グループ所有の著作権一覧
        <a class="primary-button" href="/groups/new">グループ登録</a>
      </h2>
    </div>
    <div v-if="getGroups.length" class="group-list">
      <a
        class="download-button"
        target="_blank"
        data-no-turbolink="false"
        id="group_orchard"
        href="/orchard_files/download"
        >チェックした曲のThe Orchard Bulk Uploadファイルをダウンロード</a
      >
      <h3 v-for="(getGroup, i) in getGroups" :key="i">
        {{ getGroup.name }}が所有する著作権一覧
        <a id="edit-button" :href="'/groups/edit?group_id=' + getGroup.id">編集</a>
        <a id="group-registration-button" href="groups/group_id"
          >グループ詳細</a
        >
      </h3>
    </div>
    <div v-else class="notification">
      グループはありません
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      groups: ['group1', 'group2'],
      getGroups: []
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/groups'
      )
      .then(response => {
        this.getGroups = response.data
        console.log(this.getGroups)
      })
  }
}
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
.download-button {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  margin-bottom: 0.1rem;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  max-width: 436px;
  width: 100%;
}
h3 {
  text-align: left;
  margin: 0;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1.5rem;
}
.ui .button {
  background-color: #e0e1e2;
}
#edit-button {
  margin-left: 1rem;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
}
#group-registration-button {
  float: right;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 1.5rem;
}
.notification {
  width: 96.5%;
  color: #276f86;
  background-color: #f8ffff;
  padding: 14px 21px;
  text-align: left;
  border: 1px solid #3dc3c3;
  border-radius: 3px;
  font-size: 14px;
}
@media screen and (max-width: 1280px) {
  .group-list h3 {
    font-size: 16px;
  }
  #edit-button {
    font-size: 12px;
  }
}
</style>
