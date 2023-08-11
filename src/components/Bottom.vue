<template>
  <div class="color" :style="{'box-shadow': '0 1px 3px 1px'+color, 'border-top': '2px solid'+color}">
    <p style="font-weight: bold;">DESIGNED AND BUILT BY CDH2AYN</p>
    <div style="text-align:center;box-sizing: border-box;">
      <a target="_blank" href="https://beian.miit.gov.cn/">
        <img src="/beian.png" style="float:left; margin-top: 10px;"/>
        <p style="float:left;height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">桂ICP备2022008373号</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  props: {
    color: String
  }
}
</script>

<style scoped>
.color {
  width: 100%;
  height: 80px;
  /*background-color: rgb(255, 202, 2);*/
  transition: all 0.3s linear;
  position: relative;
  bottom: 0;
}

.color p {
  text-align: center;
  color: black;
  margin: 0;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
  padding-top: 15px;
}

a {
  display: inline-block;
  text-decoration: none;
  height: 30px;
  line-height: 20px;
}
</style>