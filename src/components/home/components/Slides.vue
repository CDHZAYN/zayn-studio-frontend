<template>
  <div style="display: flex;">
    <div style="width: 20vw; height: 25.714vw; position: relative;">
      <div class="switch" @mouseenter="isBackHover = true" @mouseleave="isBackHover = false"
           @click="changeDisplay(this.onDisplayIndex-1)" style="right: 10%;top: 70%;">
          <img src="/arrow.png" alt="back" class="switch-arrow" v-if="!isBackHover"/>
          <img src="/studio.png" alt="back" class="switch-arrow" v-else/>
        <div class="switch-scroll">
          <Transition mode="out-in">
            <h6 class="switch-title" v-if="!isBackHover" key="q1">BACK</h6>
            <h6 :class="['switch-title', {'switch-title-on-hover': isBackHover}]" v-else key="q2">
              {{ items[onDisplayIndex - 1 < 0 ? items.length - 1 : onDisplayIndex - 1].name }}</h6>
          </Transition>
        </div>
      </div>
      <button style="margin-top: 100px;" @click="isBackHover=!isBackHover">切换</button>
    </div>
    <div class="main">
      <img :src="getUrl(items[onDisplayIndex].pic)" :alt="items[onDisplayIndex].name"
           :class="{'main-img-changing': isMainImgChanging}">
      <p :class="['main-name', {'main-img-changing': isMainNameChanging}]">{{ items[onDisplayIndex].name }}</p>
      <p :class="['main-desc', {'main-img-changing': isMainDescChanging}]">{{ items[onDisplayIndex].desc }}</p>
    </div>
    <div style="width: 20vw; height: 25.714vw; position: relative;">
      <div class="switch" @mouseenter="isNextHover = true" @mouseleave="isNextHover = false"
           @click="changeDisplay(this.onDisplayIndex+1)" style="left: 10%;top: 70%;">
        <div class="switch-scroll">
            <h6 class="switch-title" v-if="!isNextHover" style="direction: rtl;">NEXT</h6>
            <h6 :class="['switch-title',{'switch-title-on-hover': isNextHover}]" style="direction: rtl;" v-else>
              {{ items[onDisplayIndex + 1 > items.length - 1 ? 0 : onDisplayIndex + 1].name }}</h6>
        </div>
          <img src="/arrow.png" alt="back" class="switch-arrow" v-if="!isNextHover"
               style="transform: rotate(180deg) translateY(-3px)">
          <img src="/studio.png" alt="default" class="switch-arrow" v-else>
      </div>
    </div>
  </div>
</template>

<script>
import getAssetsFile from "../../../assets/getAssetsFile.js";

export default {
  name: "Slides",
  data() {
    return {
      onDisplayIndex: 2,
      isBackHover: false,
      isNextHover: false,
      items: [
        {
          name: 'Definitive Future',
          pic: '1-2.jpg',
          desc: 'Available on my mind'
        },
        {
          name: 'bbb',
          pic: '2-2.png',
          desc: 'sadf'
        }, {
          name: 'ccc',
          pic: '3-2.png',
          desc: 'qwbsbqe'
        }, {
          name: 'aaa',
          pic: '1-2.jpg',
          desc: 'caxgaewg'
        },
        {
          name: 'bbb',
          pic: '2-2.png',
          desc: 'wqg gwqwrg'
        },
      ],
      isMainImgChanging: false,
      isMainNameChanging: false,
      isMainDescChanging: false,
      switchTimer: 0
    }
  },
  watch: {
    switchTimer: {
      handler(newVal, oldVal) {
        if (newVal % 10 === 0)
          this.changeDisplay((this.onDisplayIndex + 1) % this.items.length)
      }
    }
  },
  methods: {
    changeDisplay(newIndex) {
      if (newIndex === this.onDisplayIndex) return
      if (this.isMainDescChanging) return
      // console.log(this.isMainDescChanging)
      this.isMainImgChanging = true
      this.isMainNameChanging = true
      this.isMainDescChanging = true
      // console.log(this.isMainDescChanging)

      let _this = this
      setTimeout(function () {
        if (newIndex < 0)
          _this.onDisplayIndex = _this.items.length - 1;
        else if (newIndex > _this.items.length - 1)
          _this.onDisplayIndex = 0;
        else
          _this.onDisplayIndex = newIndex
        _this.isMainImgChanging = false
      }, 300)
      setTimeout(function () {
        _this.isMainNameChanging = false
      }, 350)
      setTimeout(function () {
        _this.isMainDescChanging = false
      }, 400)
    },
    getUrl(name) {
      return getAssetsFile(name)
    }
  },
  mounted() {
    let _this = this
    this.switchTimer = setInterval(function () {
      if (!_this.isMainDescChanging)
        _this.switchTimer += 1
    }, 2000)
  },
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

.v-enter-active{
  transition: 0.5s ease;
}
.v-leave-active{
  transition: 0.5s ease;
}
.v-enter-from,.v-leave-to{
  opacity: 0;
}

.switch {
  display: inline-block;
  width: 150px;
  height: 30px;
  position: absolute;
  margin: 0;
  padding: 5px;

  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
  border: 3px solid;
  border-image: linear-gradient(to right top, rgba(255, 255, 255, .0) 50%, rgba(255, 255, 255, .8) 100%) 20 20;
}

.switch .switch-arrow {
  width: 25px;
  transform: translateY(3px);
}

.switch .switch-scroll {
  width: 95px;
  display: inline-block;
  margin: 0 15px 0 15px;
  overflow: hidden;
  transform: translateY(2px);
}

.switch .switch-scroll .switch-title {
  min-width: 100%;
  white-space: nowrap;
  margin: 0;
  float: left;

  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;

  position: relative;
  animation: scroll ease-in-out 3s alternate infinite;
  animation-play-state: paused;
}

.switch .switch-scroll .switch-title-on-hover {
  animation-play-state: running;
}

.main {
  text-align: center;
  height: 39vw;
}

.main img {
  width: 60vw;
  object-fit: cover;
  box-shadow: -10px 20px 35px rgba(0, 0, 0, .4);
  transition: all 0.3s linear;
}

.main img.main-img-changing {
  opacity: 0;
}

.main .main-name {
  display: block;
  margin: 0;
  color: #FFCA02;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  font-weight: bold;
  font-size: 6vw;
  transform: translateY(-4.5vw);
  text-shadow: 0 6px 6px rgba(0, 0, 0, .2);
  transition: opacity 0.35s linear, transform 0.35s ease-in-out;
}

.main .main-desc {
  display: inline-block;
  color: #FFCA02;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  font-size: 1.5vw;
  transform: translateY(-5vw);
  padding: 1vw;
  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
  text-shadow: -3px 5px 12px rgba(0, 0, 0, .2);
  border: 3px solid;
  border-image: linear-gradient(to right top, rgba(255, 255, 255, .0) 50%, rgba(255, 255, 255, .8) 100%) 20 20;
  transition: opacity 0.4s linear, transform 0.4s ease-in-out;
}

.main .main-name.main-img-changing, .main-desc.main-img-changing {
  opacity: 0;
  transform: translateY(0);
}
</style>