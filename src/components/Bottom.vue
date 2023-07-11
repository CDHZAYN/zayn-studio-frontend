<template>
  <div class="color" :style="{'background-color': color}">
    <p style="padding-top: 10px">Created By CDH2AYN</p>
    <div style="text-align:center;padding:0;">
      <a target="_blank" href="https://beian.miit.gov.cn/"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="/beian.png" style="float:left;"/>
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
}

.color p {
  text-align: center;
  color: white;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
}
</style>