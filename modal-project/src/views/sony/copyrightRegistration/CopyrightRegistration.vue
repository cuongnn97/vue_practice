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
                id="input-text-coauthor"
                v-model="coAuthor.name"
                placeholder="作曲者ID"
                type="text"
              />
              <input
                id="input-button"
                placeholder="作曲者ID"
                type="button"
                @click="addCoauthor"
                value="ADD"
              />
              <input
                id="input-button-delete"
                placeholder="作曲者ID"
                type="button"
                @click="deleteCoauthor"
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
      <div class="margin"></div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../Header'
import Footer from '../Footer'
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'cuong' },
        { id: 2, name: 'furigana1' }
      ],
      genres: [
        { id: 1, name: 'blue' },
        { id: 2, name: 'white' },
        { id: 3, name: 'green' },
        { id: 4, name: 'red' }
      ],
      subGenres: [
        { id: 1, genreId: 1, name: 'blue1' },
        { id: 2, genreId: 1, name: 'blue2' },
        { id: 3, genreId: 1, name: 'blue3' },
        { id: 4, genreId: 1, name: 'blue4' },
        { id: 5, genreId: 2, name: 'white1' },
        { id: 6, genreId: 2, name: 'white2' },
        { id: 7, genreId: 2, name: 'white3' },
        { id: 8, genreId: 2, name: 'white4' },
        { id: 9, genreId: 3, name: 'green1' },
        { id: 10, genreId: 3, name: 'green2' },
        { id: 11, genreId: 3, name: 'green3' },
        { id: 12, genreId: 3, name: 'green4' },
        { id: 13, genreId: 4, name: 'red1' },
        { id: 14, genreId: 4, name: 'red2' },
        { id: 15, genreId: 4, name: 'red3' },
        { id: 16, genreId: 4, name: 'red4' }
      ],
      pickedSubgenres: [],
      copyrightCategories: [
        { id: 1, name: '演奏権等' },
        { id: 2, name: '映画への録音' },
        { id: 3, name: '出版権等' },
        { id: 4, name: '放送・有線放送' },
        { id: 5, name: 'ゲームに供する目的で行う複製' },
        { id: 6, name: '録音権等' },
        { id: 7, name: '業務用通信カラオケ' },
        { id: 8, name: 'ビデオグラムへの録音' },
        { id: 9, name: '貸与権' },
        { id: 10, name: 'インタラクティブ配信' },
        { id: 11, name: '広告目的で行う複製' }
      ],
      formElements: {
        composerName: '',
        coAuthors: [{ name: '', displayFlag: false }],
        workFurigana: '',
        title: '',
        genre: '',
        subGenre: '',
        releaseDate: '',
        startDate: '',
        artworkFile: null,
        copyrightFile: null,
        copyrightCategories: []
      }
    }
  },
  created() {
    for (let i = 0; i < this.copyrightCategories.length; i++) {
      this.formElements.copyrightCategories.push(this.copyrightCategories[i].id)
    }
  },
  methods: {
    addCoauthor() {
      this.formElements.coAuthors.push({ name: '', displayFlag: true })
    },
    deleteCoauthor() {
      this.formElements.coAuthors.pop()
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
  height: fit-content;
}
.container {
  width: 60%;
  height: 100px;
  margin: 0 auto;
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
#input-text-coauthor {
  width: 50%;
  margin-bottom: 1rem;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  float: left;
}
#input-button {
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
#input-button-delete {
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
.margin {
  height: 70rem;
}
</style>
