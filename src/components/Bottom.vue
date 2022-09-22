<template>
  <div class="color" :style="{'background-color': color}">
    <p style="padding-top: 30px">Powered By Vite&Vue | Created By CDH2AYN</p>
    <div style="width:300px;margin:0 auto; padding:0;">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010302002938"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="/beian.png" style="float:left;"/>
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">桂公网安备
          45010302002938号</p>
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
  height: 100px;
  /*background-color: rgb(255, 202, 2);*/
  transition: all 0.3s linear;
}

.color p {
  text-align: center;
  color: white;
}
</style>