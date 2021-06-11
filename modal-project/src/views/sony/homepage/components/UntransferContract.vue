<template>
  <div>
    <h2>未譲渡契約</h2>
    <div v-show="ownedCopyrights.length" class="copyright-list">
      <h3>cuong</h3>
      <table>
        <thead>
          <tr>
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
            <td>{{ ownedCopyright.creativeWork }}</td>
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
            <td>
              <button disabled>Waiting</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayFlag: true,
      ownedCopyrights: [
        {
          creativeWork: 'Job 1',
          copyrightCategories: [
            'RIGHTS_OF_RECORDING_TO_VIDEOGRAMS_ETC',
            'RIGHTS_OF_INTERACTIVE_DISTRIBUTION',
            'RIGHTS_OF_REPRODUCTION_FOR_ADVERTISEMENTS',
            'RIGHTS_OF_COMMERCIAL_ON_DEMAND_KARAOKE'
          ],
          id: 1
        },
        {
          creativeWork: 'Job 2',
          copyrightCategories: [
            'RIGHTS_OF_RECORDING_TO_VIDEOGRAMS_ETC',
            'RIGHTS_OF_INTERACTIVE_DISTRIBUTION',
            'RIGHTS_OF_REPRODUCTION_FOR_ADVERTISEMENTS',
            'RIGHTS_OF_COMMERCIAL_ON_DEMAND_KARAOKE'
          ],
          id: 2
        }
      ],
      allSelected: false,
      ownedCopyrightIds: []
    }
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
}
.copyright-list {
  width: 100%;
}
h3 {
  text-align: left;
  margin: 0;
  margin-left: 1.3rem;
  width: 100%;
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
  border-bottom: 1px solid #2224261a;
}
td {
  padding-top: 0.5rem;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #2224261a;
}
td li {
  margin-left: -1.5rem;
}
td button {
  padding: 14px 21px;
  border: none;
  float: right;
  margin-right: 2rem;
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
table {
  border: 1px solid #2224261a;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.28571429rem;

}
</style>
