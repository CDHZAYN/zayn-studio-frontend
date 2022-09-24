<template>
  <div class="blank1"></div>
  <Slides/>
  <div v-for="item in items">
    <Sponsor :title="item.title"></Sponsor>
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
      items: [
        {
          title: 'Bro Sponsor'
        },
        {
          title: 'Tech Sponsor'
        }
      ]
    }
  },
  components: {Sponsor, Slides}
}
</script>

<style scoped>

.blank1 {
  padding-top: 50px;
}

.blank2 {
  padding-top: 27vh;
}

.blank3 {
  padding-top: 7vh;
}
</style>