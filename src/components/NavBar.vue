<template>
  <div class="background" :style="{'background-color': color}">
    <router-link v-for="item in routes" :to="item.path" @click="$emit('color', item.color)">
      {{ item.name }}
    </router-link>
    <img src="/studio.png" class="icon" alt="icon">
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    color: String,
    routes: Array
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.background {
  /*background-color: #FFCA02;*/
  /*background-color: black;*/
  padding: 3vh 0 3vh 0;
  transition: all 0.3s linear;
}

.background .icon {
  position: absolute;
  height: 60px;
  object-fit: cover;
  top: 0;
  left: 50vw;
  transform: translate(-50%, 10%);
}

a {
  text-decoration: none;
  color: white;
  font-family: "BERNIER Regular", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 22px;
  margin-left: 20px;
  font-weight: bold;
}


</style>