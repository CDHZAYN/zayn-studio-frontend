<template>
  <SlidesButton style="position: absolute; left: 20vw;top: calc(70px + 30px + 30.5vw);" type="BACK"
                :button-name="items[onDisplayIndex - 1 >= 0 ? onDisplayIndex - 1: items.length - 1].name"
                @back="changeDisplay"/>
  <div class="main">
    <img :src="items[onDisplayIndex].pic ? items[onDisplayIndex].pic : '/default-banner.png'"
         :alt="items[onDisplayIndex].name"
         :class="{'main-img-changing': isMainImgChanging}">
    <p :class="['main-name', {'main-img-changing': isMainNameChanging}]">{{ items[onDisplayIndex].name }}</p>
    <p :class="['main-desc', 'glass', {'main-img-changing': isMainDescChanging}]">{{ items[onDisplayIndex].desc }}</p>
  </div>
  <SlidesButton style="position: absolute; right: 20vw;top: calc(70px + 30px + 30.5vw);" type="NEXT"
                :button-name="items[onDisplayIndex + 1 < items.length ? onDisplayIndex + 1: 0].name"
                @back="changeDisplay"/>
</template>

<script>
import getAssetsFile from "../../../assets/getAssetsFile.js";
import SlidesButton from "./SlidesButton.vue";

export default {
  name: "Slides",
  components: {SlidesButton},
  data() {
    return {
      onDisplayIndex: 0,
      items: [
        {
          name: 'LOADING',
          desc: 'please wait...'
        }
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
  created() {
    this.$request.get('/banner/get').then((response) => {
      console.log(response)
      this.items = response.msg;
    })
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
  user-select: none;
}

.main img {
  width: 60vw;
  object-fit: cover;
  box-shadow: -10px 20px 35px rgba(0, 0, 0, .2);
  transition: transform 0.3s linear, opacity 0.3s linear;
}

.main img.main-img-changing {
  opacity: 0;
}

.main .main-name {
  display: block;
  margin: 0;
  color: #FFCA02;
  font-weight: bold;
  font-size: 6vw;
  transform: translateY(-4.5vw);
  text-shadow: 0 6px 6px rgba(0, 0, 0, .2);
  transition: opacity 0.35s linear, transform 0.35s ease-in-out;
}

.main .main-desc {
  display: inline-block;
  color: black;
  font-size: 1.5vw;
  transform: translateY(-5vw);
  padding: 1vw;
  transition: opacity 0.4s linear, transform 0.4s ease-in-out;
}

.main .main-name.main-img-changing, .main-desc.main-img-changing {
  opacity: 0;
  transform: translateY(0);
}

.glass {
  box-shadow: -2px 2px 8px rgba(0, 0, 0, .3), inset -2px 2px 10px rgba(0, 0, 0, .1);
  border: 1px solid;
  border-image: linear-gradient(to left bottom, rgba(0, 0, 0, .1) 30%, rgba(255, 202, 2, .0) 40%, rgba(239, 239, 1, 0.8) 100%) 20 20;
  background-image: linear-gradient(to left bottom, rgb(255, 202, 2, 0.1) 0%, rgb(255, 255, 255, 0.025) 30%, rgb(255, 255, 255, 0.05) 60%, rgba(255, 202, 2, 0.15) 100%);
  text-shadow: -2px 2px 3px rgba(0, 0, 0, .15);
}
</style>