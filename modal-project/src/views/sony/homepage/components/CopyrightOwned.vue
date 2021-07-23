<template>
  <div>
    <h2>個人所有の著作権一覧</h2>
    <div v-if="ownedCopyrights.length" class="copyright-list">
      <h3>cuongが所有する著作権一覧</h3>
      <table>
        <thead>
          <tr>
            <th style="width:5%;text-align:center">
              <input type="checkbox" @click="selectAll" v-model="allSelected" />
            </th>
            <th @click="checkId" style="width:22.4%">Creative Work</th>
            <th style="width:59%">Copyright Categories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ownedCopyright in ownedCopyrights"
            :key="ownedCopyright.id"
          >
            <td style="text-align:center">
              <input
                type="checkbox"
                @click="select(ownedCopyright.id)"
                :value="ownedCopyright.id"
                v-model="ownedCopyrightIds"
              />
            </td>
            <td>{{ ownedCopyright.creativeWorkName }}</td>
            <td>
              <span style="font-weight:bold">Original</span>
              <ul>
                <li
                  v-for="(copyrightCategory,
                  i) in ownedCopyright.copyrightCategories"
                  :key="i"
                >
                  {{ copyrightCategory }}
                </li>
              </ul>
            </td>
            <td style="width:130px">
              <a href="/copyright/edit">著作権譲渡</a>
              <a href="">編集</a>
            </td>
          </tr>
        </tbody>
      </table>
      <a
        class="download-button"
        target="_blank"
        data-no-turbolink="false"
        id="user_orchard"
        href="/orchard_files/download"
        >チェックした曲のThe Orchard Bulk Uploadファイルをダウンロード</a
      >
    </div>
    <div v-else class="notification">
      著作権はありません
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      displayFlag: true,
      allSelected: false,
      ownedCopyrightIds: [],
      ownedCopyrights: [],
      creativeWorkIdsObject: {
        creativeWork: '',
        copyrightCategories: [],
        creativeWorkName: ''
      }
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/copyrights'
      )
      .then(response => {
        let copyrightsData = response.data
        for (let i = 0; i < copyrightsData.length; i++) {
          if (i == 0) {
            this.creativeWorkIdsObject.creativeWork =
              copyrightsData[i].creative_work_id
            this.creativeWorkIdsObject.copyrightCategories.push(
              copyrightsData[i].copyright_category
            )
          } else {
            if (
              this.creativeWorkIdsObject.creativeWork !==
              copyrightsData[i].creative_work_id
            ) {
              this.ownedCopyrights.push(this.creativeWorkIdsObject)
              this.creativeWorkIdsObject = null
            } else {
              this.creativeWorkIdsObject.copyrightCategories.push(
                copyrightsData[i].copyright_category
              )
            }
          }
        }
        this.ownedCopyrights.push(this.creativeWorkIdsObject)
        for (const ownedCopyright of this.ownedCopyrights) {
          axios
            .get(
              'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works/' +
                ownedCopyright.creativeWork
            )
            .then(response => {
              ownedCopyright.creativeWorkName = response.data.name
            })
        }
      })
  },
  methods: {
    selectAll() {
      this.ownedCopyrightIds = []
      if (!this.allSelected) {
        for (let i = 0; i < this.ownedCopyrights.length; i++) {
          this.ownedCopyrightIds.push(this.ownedCopyrights[i].id)
        }
      }
    },
    select(id) {
      this.allSelected = false
      const index = this.ownedCopyrightIds.indexOf(id)
      if (index > -1) {
        this.ownedCopyrightIds.splice(index, 1)
      }
    }
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
  font-size: 24px ;
}
.copyright-list {
  width: 100%;
}
h3 {
  text-align: left;
  margin: 0;
  margin-left: 1.3rem;
  width: 100%;
  font-size: 18px;
}
table {
  width: 100%;
  margin-top: 1rem;
}
th {
  background-color: #f9fafb;
  padding: 13px 11px;
  text-align: left;
  font-size: 14px;
}
td {
  padding-top: 0.5rem;
  text-align: left;
  font-size: 14px;
}
td li {
  margin-left: -1.5rem;
}
td a {
  display: block;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 9px;
  border-radius: 5px;
  font-weight: bold;
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
.download-button {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  max-width: 436px;
  width: 100%;
}
</style>
