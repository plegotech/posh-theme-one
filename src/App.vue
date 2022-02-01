<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header />

    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'
export default {
  name: 'App',
  components: {
    Header, Footer, Body,
  }
}
</script>
<style scoped>
@import "assets/css/bootstrap.min.css";
@import "assets/css/jquery-ui.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css");
@import "assets/css/fonts.css";
@import "assets/css/all.css";
@import "assets/css/style.css";
</style>