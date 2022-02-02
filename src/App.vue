<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header />

    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Header, Footer, Home,
  }

}
</script>