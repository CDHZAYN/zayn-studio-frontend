<template>
  <span class="title">{{ title }}</span>
  <div class="main">
    <div v-for="(item, key) in items" class="item" @mouseenter="items[key].isHover = true"
         @mouseleave="items[key].isHover = false">
      <div class="word-frame">
        <p :class="['desc', {'hover':items[key].isHover}]">{{ item.desc }} </p>
        <p :class="['name', {'hover':items[key].isHover}]">{{ item.name }}</p>
      </div>
      <div :class="['avatar', {'hover':items[key].isHover}]">
        <img :class="['avatar-img',{'hover': items[key].isHover}]" :src="getUrl(item.avatar)" alt=""/>
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
          desc: "walking on the time axis",
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
  methods: {
    getUrl(name) {
      return getAssetsFile(name);
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

.title {
  display: block;
  margin-bottom: 30px;
  color: #FFCA02;
  font-family: "Tahoma", serif;
  font-weight: bold;
  font-size: 60px;
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
  position: relative;
  /*background-color: lightyellow;*/
  margin: 10px 40px;
  width: 200px;
  height: 60px;
  border: 3px solid;
  border-image: linear-gradient(to right top, rgba(255, 255, 255, .0) 50%, rgba(255, 255, 255, .8) 100%) 20 20;
  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
}

.main .item .avatar {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
  left: -27px;
  border-radius: 50%;
  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
  transition: all 0.5s ease-out;
}

.main .item .avatar.hover {
  left: 178px;
}

.main .item .avatar .avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: rotate(0deg);
  transition: all 0.5s ease-out;
}

.main .item .avatar .avatar-img.hover {
  transform: rotate(360deg);
}

.main .item .word-frame {
  margin: 0;
  width: 150px;
  height: 60px;
  left: 25px;
  display: block;
  position: relative;
  overflow: hidden;
}

.main .item .word-frame p{
  font-weight: normal;
  margin: 0;
  transition: all 0.5s ease-out;
  text-align: center;
  position: relative;
}

.main .item .word-frame .name {
  bottom: 10px;
  width: 150px;
  font-size: 25px;
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
}

.main .item .word-frame .name.hover {
  clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%);
}

.main .item .word-frame .desc {
  min-width: 100%;
  white-space: nowrap;
  display: inline-block;
  top: 18px;
  font-size: 18px;
  color: rgb(50, 50, 50);
  clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
}

.main .item .word-frame .desc.hover {
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  animation: scroll ease-in-out 3s alternate infinite;
}

</style>