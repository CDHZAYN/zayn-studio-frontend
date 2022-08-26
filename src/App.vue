<template>
  <nav-bar/>
  <router-view/>
  <Bottom></Bottom>
</template>

<script>
import Slides from "./components/home/components/Slides.vue";
import NavBar from "./components/NavBar.vue";
import Bottom from "./components/Bottom.vue";

export default {
  components: {NavBar, Slides, Bottom},
}
</script>

<style scoped>
</style>
