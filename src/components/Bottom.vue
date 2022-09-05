<template>
<div class="color" :style="{'background-color': color}">
  <p>Powered By Vite&Vue | Created By CDH2AYN</p>
</div>
</template>

<script>
export default {
  name: "Bottom",
  props:{
    color: String
  }
}
</script>

<style scoped>
.color{
  width: 100%;
  height: 15vh;
  /*background-color: rgb(255, 202, 2);*/
  transition: all 0.3s linear;
}

.color p{
  padding-top: 5vh;
  text-align: center;
  color: white;
}
</style>