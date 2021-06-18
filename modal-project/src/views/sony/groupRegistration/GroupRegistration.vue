<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <form
          class="ui form"
          action="/groups"
          accept-charset="UTF-8"
          method="post"
        >
          <div class="content">
            <h1>
              グループ登録
            </h1>
            <div class="fields">
              <label>グループ名フリガナ</label>
              <input
                name="group[name_kana]"
                v-model="formElements.groupNameFurigana"
                id="input-text"
                type="text"
              />
            </div>
            <div class="fields">
              <label>グループ名</label>
              <input
                name="group[name]"
                v-model="formElements.groupName"
                id="input-text"
                type="text"
              />
            </div>
            <div class="action-form">
              <a class="cancel-button" href="/homepage">キャンセル</a>
              <input
                type="submit"
                value="グループ登録"
                class="ui primary button"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="margin"></div>
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
      formElements: {
        groupNameFurigana: '',
        groupName: ''
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
.action-form input {
  float: left;
  background-color: #2185d0;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0.3rem;
  border: none;
}
.margin {
  margin-top: 20rem;
}
</style>
