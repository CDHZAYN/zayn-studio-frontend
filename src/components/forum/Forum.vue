<template>
  <div class="button-word-frame">
      <h6 class="button-word button-on-hover">
        fdsafasdasfsad</h6>
  </div>

  <div class="word-frame">
    <p class="desc hover">dsasdvadsfdsfasd</p>
  </div>
</template>

<script>
export default {
  name: "Forum",
  data() {
    return {
      show:true
    }
  },
  methods:{
    getIt(){
      this.wuhu = !this.wuhu;
    }
  }
}
</script>

<style scoped>

@keyframes scroll {
  0% {
    margin-left: 0;
    transform: translateX(0);
  }
  100% {
    margin-left: 100%;
    transform: translateX(-100%);
  }
}

.button-word-frame {
  width: 95px;
  display: inline-block;
  margin: 0 15px 0 15px;
  overflow: hidden;
  transform: translateY(2px);
}

.button-word-frame .button-word {
  min-width: 100%;
  white-space: nowrap;
  margin: 0;
  float: left;

  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;

  position: relative;
}

.button-word-frame .button-word.button-on-hover {
  animation: scroll ease-in-out 3s alternate infinite;
}

.word-frame {
  margin: 0;
  position: absolute;
  width: 150px;
  height: 60px;
  left: 25px;
  display: block;
  text-align: center;
  /*overflow: hidden;*/
}

.word-frame .desc {
  white-space: nowrap;
  min-width: 100%;
  float: left;
  /*position: relative;*/
  bottom: 32%;
  font-size: 18px;
  color: rgb(50, 50, 50);
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
}

.word-frame .desc.hover {
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  animation: scroll ease-in-out 3s alternate infinite;
}


</style>