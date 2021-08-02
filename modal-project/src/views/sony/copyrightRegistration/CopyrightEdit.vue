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
            <div v-for="user in users" :key="user.id" class="radio-field">
              <input
                v-model="formElements.composerName"
                :value="user.id"
                type="radio"
              />
              <span>{{ user.name }}</span>
            </div>
          </div>
          <div class="fields">
            <label>共作者追加</label>
            <div
              v-for="(coAuthor, i) in formElements.coAuthors"
              :key="i"
              class="input-coauthor"
            >
              <input
                :id="'input-text-coauthor-' + i"
                v-model="coAuthor.name"
                placeholder="作曲者ID"
                type="text"
              />
              <input
                :id="'input-button-' + i"
                type="button"
                @click="addCoauthor"
                value="ADD"
              />
              <input
                :id="'input-button-delete-' + i"
                type="button"
                @click="deleteCoauthor(i)"
                value="DELETE"
                v-show="coAuthor.displayFlag"
              />
            </div>
          </div>
          <div class="fields">
            <label>作品名フリガナ</label>
            <input
              v-model="formElements.workFurigana"
              id="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>作品名</label>
            <input v-model="formElements.title" id="input-text" type="text" />
          </div>
          <div class="fields">
            <label>ジャンル</label>
            <select
              name="genres"
              id="genres"
              @change="onChangeGenre($event)"
              v-model="formElements.genre"
            >
              <option value="0" selected></option>
              <option
                v-for="genre in genres"
                :key="genre.id"
                :value="genre.id"
                >{{ genre.name }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>サブジャンル</label>
            <select
              name="subGenres"
              id="subGenres"
              v-model="formElements.subGenre"
            >
              <option value="0" selected></option>
              <option
                v-for="pickedSubgenre in pickedSubgenres"
                :key="pickedSubgenre.id"
                :value="pickedSubgenre.id"
                >{{ pickedSubgenre.name }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>リリース日</label>
            <input
              v-model="formElements.releaseDate"
              id="input-text"
              type="date"
            />
          </div>
          <div class="fields">
            <label>販売開始日</label>
            <input
              v-model="formElements.startDate"
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
                @change="addCategory(copyrightCategory.id)"
                class="checkbox-input"
                type="checkbox"
                checked
              />
              <span>{{ copyrightCategory.name }}</span>
            </div>
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/homepage">キャンセル</a>
            <a class="register-button" href="/creative_works">著作物登録</a>
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
export default {
  data() {
    return {
      users: [
        { id: 'user_id:40c95716-f9be-44db-98d2-bb7d67033716', name: 'cuong' }
      ],
      pickedSubgenres: [],
      formElements: {
        creator_ids: [],
        creative_work_name_kana: '',
        creative_work_name: '',
        creative_work_genre: '',
        creative_work_sub_genre: '',
        creative_work_art_work_file: null,
        creative_work_file: null,
        copyright_categories: []
      },
      genres: this.$store.state.genres,
      subGenres: this.$store.state.subGenres,
      copyrightCategories: this.$store.state.copyrightCategories
    }
  },
  created() {
    for (let i = 0; i < this.copyrightCategories.length; i++) {
      this.formElements.copyright_categories.push(this.copyrightCategories[i].id)
    }
  },
  methods: {
    addCoauthor() {
      this.formElements.coAuthors.push({ name: '', displayFlag: true })
    },
    deleteCoauthor(i) {
      this.formElements.coAuthors.splice(i, 1)
    },
    onChangeGenre(event) {
      this.pickedSubgenres = []
      for (let i = 0; i < this.subGenres.length; i++) {
        if (this.subGenres[i].genreId.toString() === event.target.value) {
          this.pickedSubgenres.push(this.subGenres[i])
        }
      }
    },
    onFileChange(event, fileName) {
      var files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      if (fileName === 'artworkFile') {
        this.formElements.artworkFile = files[0]
      } else if (fileName === 'copyrightFile') {
        this.formElements.copyrightFile = files[0]
      }
    },
    addCategory(id) {
      const index = this.formElements.copyrightCategories.indexOf(id)
      if (index > -1) {
        this.formElements.copyrightCategories.splice(index, 1)
      } else {
        this.formElements.copyrightCategories.push(id)
      }
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
