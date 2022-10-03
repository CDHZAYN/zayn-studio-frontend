<template>
  <div style="min-height: calc(100vh - 96px);">
    <nav-bar @color="changeColor" :color="nowColor" :routes="routes"/>
    <router-view/>
  </div>
  <Bottom :color="nowColor"></Bottom>
</template>

<script>
import index from './network/routes.js'

import Slides from "./components/home/components/Slides.vue";
import NavBar from "./components/NavBar.vue";
import Bottom from "./components/Bottom.vue";

export default {
  components: {NavBar, Slides, Bottom},
  data() {
    return {
      nowColor: '#FFCA02',
      routes: index
    }
  },
  methods: {
    changeColor(color) {
      this.nowColor = color;
    }
  },
  watch: {
    $route(newVal) {
      let nowPath = this.$route.fullPath
      console.log('changed!', this.routes.filter(o=>o.path === nowPath)[0].color)
      this.nowColor = this.routes.filter(o => o.path === nowPath)[0].color
      sessionStorage.setItem('nowColor', this.nowColor)
    }
  }
}
</script>

<style scoped>

Bottom {
  margin-left: -4px;
}

</style>
