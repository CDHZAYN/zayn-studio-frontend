<template>
  <nav-bar @color="changeColor" :color="nowColor" :routes="this.routes"/>
  <router-view/>
  <Bottom :color="nowColor"></Bottom>
</template>

<script>
import Slides from "./components/home/components/Slides.vue";
import NavBar from "./components/NavBar.vue";
import Bottom from "./components/Bottom.vue";

export default {
  components: {NavBar, Slides, Bottom},
  data() {
    return {
      nowColor: '#FFCA02',
      routes: [
        {
          name: 'HOME',
          path: '/',
          color: '#FFCA02'
        },
        {
          name: 'GAMES',
          path: '/games',
          color: '#E83A37'
        },
        {
          name: 'FORUM',
          path: '/forum',
          color: '#66CC33'
        },
        {
          name: 'BLOG',
          path: '/blog',
          color: '#0E619E'
        }
      ]
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
      // console.log('changed!', this.routes.filter(o=>o.path === nowPath)[0].color)
      this.nowColor = this.routes.filter(o=>o.path === nowPath)[0].color
      sessionStorage.setItem('nowColor', this.nowColor)
    }
  }
}
</script>

<style scoped>
</style>
