<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <div class="alert">
          ログインしました。
        </div>
        <div class="content">
          <h1>
            私のページ
            <a class="primary-button" href="/creative_works/new">著作物登録</a>
          </h1>
          <CopyrightOwned />
          <CopyrightGroup />
          <CopyrightPublisher />
          <UntransferContract />
        </div>
        <div class="margin"></div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'
import CopyrightOwned from './components/CopyrightOwned'
import CopyrightGroup from './components/CopyrightGroup'
import CopyrightPublisher from './components/CopyrightPublisher'
import UntransferContract from './components/UntransferContract'
export default {
  components: {
    Header,
    Footer,
    CopyrightOwned,
    CopyrightGroup,
    CopyrightPublisher,
    UntransferContract
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
.margin {
  height: 5rem;
}
</style>
