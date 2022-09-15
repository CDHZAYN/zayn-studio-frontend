<template>
  <div style="display: flex;">
    <div style="width: 20vw; height: 25.714vw; position: relative;">
      <SlidesButton style="right: 20%;bottom: 10%" type="BACK"
                        :button-name="items[onDisplayIndex - 1 >= 0 ? onDisplayIndex - 1: items.length - 1].name"
                        @back="changeDisplay"/>
    </div>
    <div class="main">
      <img :src="getUrl(items[onDisplayIndex].pic)" :alt="items[onDisplayIndex].name"
           :class="{'main-img-changing': isMainImgChanging}">
      <p :class="['main-name', {'main-img-changing': isMainNameChanging}]">{{ items[onDisplayIndex].name }}</p>
      <p :class="['main-desc', {'main-img-changing': isMainDescChanging}]">{{ items[onDisplayIndex].desc }}</p>
    </div>
    <div style="width: 20vw; height: 25.714vw; position: relative;">
      <SlidesButton style="left: 20%;bottom: 10%" type="NEXT"
                        :button-name="items[onDisplayIndex + 1 < items.length ? onDisplayIndex + 1: 0].name"
                        @back="changeDisplay"/>
    </div>
  </div>
</template>

<script>
import getAssetsFile from "../../../assets/getAssetsFile.js";
import SlidesButton from "./SlidesButton.vue";

export default {
  name: "Slides",
  components: {SlidesButton},
  data() {
    return {
      onDisplayIndex: 2,
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
          this.changeDisplay(1)
      }
    }
  },
  methods: {
    changeDisplay(diff) {
      if (this.isMainDescChanging) return
      this.isMainImgChanging = true
      this.isMainNameChanging = true
      this.isMainDescChanging = true

      let newIndex = this.onDisplayIndex + diff
      let _this = this
      setTimeout(function () {

        if (newIndex < 0)
          _this.onDisplayIndex = _this.items.length - 1
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