<template>
  <span class="title">{{ title }}</span>
  <div class="main">
    <div v-for="item in items" class="item">
      <div class="avatar" :style="{'background-image': 'url('+getUrl(item.avatar)+')'}"></div>
      <div style="display: flex;flex-direction: column">
        <span class="name">{{ item.name }}</span>
        <span class="desc">{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getAssetsFile from "../../../assets/getAssetsFile.js";
export default {
  name: "Sponsor",
  props: {
    title: String,
    getPath: String,
  },
  data() {
    return {
      items: [
        {
          name: "littleBlack",
          desc: "\"都jb兄弟\"",
          avatar: 'zth.jpg',
          src: 'littleblack.cc'
        },
        {
          name: "ZY",
          desc: "miku fan~",
          avatar: 'studio.png',
          src: 'zyinnju.com'
        },
        {
          name: "littleBlack",
          desc: "\"都jb兄弟\"",
          avatar: 'zth.jpg',
          src: 'littleblack.cc'
        },
        {
          name: "littleBlack",
          desc: "\"都jb兄弟\"",
          avatar: 'zth.jpg',
          src: 'littleblack.cc'
        },
        {
          name: "ZY",
          desc: "miku fan~",
          avatar: 'studio.png',
          src: 'zyinnju.com'
        }
      ],
      backgroundImage: this.getUrl()
    }
  },
  methods:{
    getUrl(name){
      return getAssetsFile(name);
    }
  }
}
</script>

<style scoped>
.title {
  display: block;
  margin-bottom: 2vh;
  color: #FFCA02;
  font-family: "Tahoma", serif;
  font-weight: bold;
  font-size: 3vw;
  /*text-shadow: 0 3px 3px rgba(255, 202, 2, .3);*/
  text-align: center;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
}

.main .item {
  display: flex;
  /*background-color: lightyellow;*/
  margin: 3vh 3vw;
}

.main .item:before {
  content: '';
  position: absolute;
  width: 10vw;
  height: 5vw;
  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0) 10%, rgba(255, 202, 2, .3) 100%);
  border-radius: 10%;
  z-index: -1;
  transform: skew(45deg) translateX(50%);
}

.main .item .avatar {
  width: 5vw;
  height: 5vw;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #FFCA02;
}

.main .item .name {
  display: block;
  margin: 0.5vw 0 0 1vw;
  text-align: center;
  font-size: 1.5vw;
  color: #FFCA02;
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.main .item .desc {
  display: block;
  margin: 0.5vw 0 0 3vw;
  text-align: center;
  font-size: 0.9vw;
  color: rgba(0, 0, 0, .8);
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

</style>