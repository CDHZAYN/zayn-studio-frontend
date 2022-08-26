<template>
  <div class="background">
    <router-link v-for="item in items" :to="item.url" v-slot="{navigate}">
      {{ item.name }}
    </router-link>
    <img src="/studio.png" class="icon" alt="icon">
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        {
          name: 'HOME',
          url: '/'
        },
        {
          name: 'GAMES',
          url: '/games'
        },
        {
          name: 'FORUM',
          url: '/forum'
        },
        {
          name: 'BLOG',
          url: '/blog'
        }
      ]
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #FFCA02;
  /*background-color: black;*/
  padding: 3vh 0 3vh 0;
}

.background .icon {
  position: absolute;
  height: 10vh;
  top: 0;
  left: 50vw;
  transform: translate(-50%, 0);
}

a {
  text-decoration: none;
  color: white;
  font-family: "BERNIER Regular", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 3.5vh;
  margin-left: 20px;
}


</style>