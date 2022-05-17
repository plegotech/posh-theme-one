<template>
  <div>
    <header-comp></header-comp>
    <h1>Contact US</h1>
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";

export default {
  name: "Contactus",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>