<template>
  <div class="blank1"></div>
  <Slides/>
  <div v-for="title in titles">
    <Sponsor :title="title"></Sponsor>
    <div class="blank3"></div>
  </div>
</template>

<script>
import Slides from "./components/Slides.vue";
import Sponsor from "./components/Sponsor.vue";

export default {
  name: "Home",
  data() {
    return {
      titles: [
          'Cute Sponsor',
          'Bro Sponsor',
      ]
    }
  },
  components: {Sponsor, Slides}
}
</script>

<style scoped>

.blank1 {
  padding-top: 30px;
}

.blank2 {
  padding-top: 27vh;
}

.blank3 {
  padding-top: 7vh;
}
</style>