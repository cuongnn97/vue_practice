<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <div class="content">
          <h1>
            著作物登録
          </h1>
          <div class="fields">
            <label>作曲者名</label><br /><br />
            <div
              v-for="user in creativeWorkFromDb.creator_ids"
              :key="user"
              class="radio-field"
            >
              <input
                v-model="formElements.composerName"
                :value="user"
                type="radio"
                disabled
              />
              <span>{{ user }}</span>
            </div>
          </div>
          <div class="fields">
            <label>作品名フリガナ</label>
            <input
              v-model="creativeWorkFromDb.name_kana"
              id="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>作品名</label>
            <input
              v-model="creativeWorkFromDb.name"
              id="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>ジャンル</label>
            <select
              name="genres"
              id="genres"
              @change="onChangeGenre($event)"
              v-model="creativeWorkFromDb.genre"
            >
              <option value="0"></option>
              <option
                v-for="(genre, index) in genres"
                :key="index"
                :value="genre"
                >{{ genre }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>サブジャンル</label>
            <select
              name="subGenres"
              id="subGenres"
              v-model="creativeWorkFromDb.sub_genre"
            >
              <option value="0"></option>
              <option
                v-for="(pickedSubgenre, index) in pickedSubgenres"
                :key="index"
                :value="pickedSubgenre.subGenres"
                >{{ pickedSubgenre.subGenres }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>リリース日</label>
            <input
              v-model="creativeWorkFromDb.release_date"
              id="input-text"
              type="date"
            />
          </div>
          <div class="fields">
            <label>販売開始日</label>
            <input
              v-model="creativeWorkFromDb.sale_start_date"
              id="input-text"
              type="date"
            />
          </div>
          <div class="fields">
            <label>アートワークファイル</label>
            <input
              @change="onFileChange($event, 'artworkFile')"
              id="input-text"
              type="file"
            />
          </div>
          <div class="fields">
            <label>著作物ファイル</label>
            <input
              @change="onFileChange($event, 'copyrightFile')"
              id="input-text"
              type="file"
              disabled
            />
          </div>
          <div class="fields">
            <div
              v-for="copyrightCategory in copyrightCategories"
              :key="copyrightCategory.id"
              class="checkbox-field"
            >
              <input
                :value="copyrightCategory.id"
                v-model="creativeWorkFromDb.copyright_categories"
                @change="addCategory(copyrightCategory.id)"
                class="checkbox-input"
                type="checkbox"
                disabled
              />
              <span>{{ copyrightCategory.name }}</span>
            </div>
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/homepage">キャンセル</a>
            <a class="register-button" @click="editCreativeWork">編集</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
export default {
  data() {
    return {
      formElements: {
        creator_ids: [],
        creative_work_name_kana: '',
        creative_work_name: '',
        creative_work_genre: '',
        creative_work_sub_genre: '',
        creative_work_art_work_file: null,
        creative_work_file: null,
        release_date: '',
        sale_start_date: '',
        copyright_categories: []
      },
      creativeWorkFromDb: [],
      pickedSubgenres: [],
      genres: this.$store.state.genres,
      subGenres: this.$store.state.subGenres,
      copyrightCategories: this.$store.state.copyrightCategories
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works/' +
          this.$route.query.creative_work_id
      )
      .then(response => {
        this.creativeWorkFromDb = response.data
        for (let i = 0; i < this.subGenres.length; i++) {
          if (
            this.subGenres[i].genres.toString() ===
            this.creativeWorkFromDb.genre
          ) {
            this.pickedSubgenres.push(this.subGenres[i])
          }
        }
        if (this.creativeWorkFromDb.release_date !== null) {
          this.creativeWorkFromDb.release_date =
            this.creativeWorkFromDb.release_date.substring(0, 4) +
            '-' +
            this.creativeWorkFromDb.release_date.substring(
              4,
              this.creativeWorkFromDb.release_date.length
            )
          this.creativeWorkFromDb.release_date =
            this.creativeWorkFromDb.release_date.substring(0, 7) +
            '-' +
            this.creativeWorkFromDb.release_date.substring(
              7,
              this.creativeWorkFromDb.release_date.length
            )
        }
        if (this.creativeWorkFromDb.sale_start_date !== null) {
          this.creativeWorkFromDb.sale_start_date =
            this.creativeWorkFromDb.sale_start_date.substring(0, 4) +
            '-' +
            this.creativeWorkFromDb.sale_start_date.substring(
              4,
              this.creativeWorkFromDb.sale_start_date.length
            )
          this.creativeWorkFromDb.sale_start_date =
            this.creativeWorkFromDb.sale_start_date.substring(0, 7) +
            '-' +
            this.creativeWorkFromDb.sale_start_date.substring(
              7,
              this.creativeWorkFromDb.sale_start_date.length
            )
        }
      })
  },
  methods: {
    onChangeGenre(event) {
      this.pickedSubgenres = []
      for (let i = 0; i < this.subGenres.length; i++) {
        if (this.subGenres[i].genres.toString() === event.target.value) {
          this.pickedSubgenres.push(this.subGenres[i])
        }
      }
    },
    editCreativeWork() {
      this.formElements.creator_ids = this.creativeWorkFromDb.creator_ids
      this.formElements.creative_work_name_kana = this.creativeWorkFromDb.name_kana
      this.formElements.creative_work_name = this.creativeWorkFromDb.name
      this.formElements.creative_work_genre = this.creativeWorkFromDb.genre
      this.formElements.creative_work_sub_genre = this.creativeWorkFromDb.sub_genre
      this.formElements.release_date = this.creativeWorkFromDb.release_date.replaceAll('-', '')
      this.formElements.sale_start_date = this.creativeWorkFromDb.sale_start_date.replaceAll('-', '')
      axios
        .patch(
          'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works/' +
            this.$route.query.creative_work_id,
          JSON.stringify(this.formElements)
          
        )
        .then(response => {
          window.location.href = '/'
        })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
body {
  font-family: sans-serif;
}
.main-content {
  margin-top: 2rem;
  width: 100%;
  position: relative;
  height: fit-content;
}
.container {
  width: 1127px;
  margin: 0 auto;
  padding-bottom: 10rem;
}
.content h1 {
  width: 100%;
  color: #00b5ad;
  text-align: left;
  border-bottom: 2px solid #00b5ad;
  padding-bottom: 0.21428571rem;
}
.fields {
  margin-bottom: 1rem;
}
.fields label {
  color: #000000de;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: bold;
  width: 100%;
  float: left;
  text-align: left;
  margin-bottom: 0.5rem;
}
#input-text {
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
}
input[id*='input-text-coauthor'] {
  width: 50%;
  margin-bottom: 1rem;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  float: left;
}
input[id*='input-button'] {
  float: left;
  padding: 11px 18px;
  margin-left: 0.5rem;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #00000099;
  cursor: pointer;
}
input[id*='input-button-delete'] {
  float: left;
  padding: 11px 18px;
  margin-left: 0.5rem;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #00000099;
  cursor: pointer;
}
.radio-field {
  width: 40%;
  float: left;
  text-align: left;
  margin-bottom: 1rem;
}
.fields select {
  width: 101%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  background-color: white;
}
.checkbox-field {
  width: 40%;
  float: left;
  text-align: left;
  margin-bottom: 1rem;
  background-color: white;
}
.action-form {
  width: 100%;
  display: inline-block;
  text-align: left;
}
.cancel-button {
  float: left;
  padding: 8px 18px;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  color: #00000099;
  cursor: pointer;
  text-decoration: none;
}
.register-button {
  float: left;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0.3rem;
}
@media screen and (max-width: 1199px) {
  .container {
    width: 933px;
  }
}
@media screen and (max-width: 993px) {
  .container {
    width: 723px;
  }
}
</style>
