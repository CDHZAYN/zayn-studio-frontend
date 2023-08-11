<template>
  <div class="background" :style="{'box-shadow': '0 -1px 3px 1px'+color,
  'border-bottom': '2px solid'+color}">
    <router-link v-for="(item, index) in routes" :to="item.path" :style="{'color':item.color}" v-show="item.show">
      {{ item.name }}
    </router-link>
    <img src="/studio.png" class="icon" alt="icon">
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    color: String,
    routes: Array
  },
  data() {
    return {
      selected: [true, false, false, false],

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
  box-sizing: border-box;
  /*box-shadow: inset 0 -10px 13px 1px rgba(255, 202, 2, 0.5);*/
}

/*.background:after{*/
/*  content: '';*/
/*  display: block;*/
/*  position: absolute;*/
/*  top: 0;*/
/*  height: calc(30px + 6vh);*/
/*  width: 50px;*/
/*  z-index: -1;*/
/*  !*border-bottom: 4px solid transparent; !* 设置底部边框 *!*!*/
/*  background-color: rgba(255, 202, 2, 0.3); !* 渐变颜色 *!*/
/*  background-blend-mode: color;*/
/*}*/

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
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
  font-size: 22px;
  margin-left: 20px;
  font-weight: bold;
  /*border-bottom: 5px solid red;*/
}


</style>