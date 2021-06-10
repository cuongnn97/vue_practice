<template>
  <div>
    <Header :rightMenu="true"/>
    <div class="main-content">
      <div class="container">
        <div class="alert">
          ログインしました。
        </div>
        <div class="content">
          <h1>
            私のページ
            <a class="primary-button" href="">著作物登録</a>
          </h1>
          <CopyrightOwned />
          <CopyrightGroup />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import CopyrightOwned from './homepage/CopyrightOwned'
import CopyrightGroup from './homepage/CopyrightGroup'
export default {
  data() {},
  components: {
    Header,
    Footer,
    CopyrightOwned,
    CopyrightGroup
  }
}
</script>
<style scoped>
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
.alert {
  width: 96.5%;
  color: #276f86;
  background-color: #f8ffff;
  padding: 14px 21px;
  text-align: left;
  border: 1px solid #3dc3c3;
  border-radius: 3px;
  font-size: 14px;
}
.content h1 {
  width: 100%;
  color: #00b5ad;
  text-align: left;
  border-bottom: 2px solid #00b5ad;
  padding-bottom: 0.21428571rem;
}
.content a {
  float: right;
  background-color: #2185d0;
  color: #ffffff;
  text-decoration: none;
  font-size: 1vw;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 3px;
}
</style>
