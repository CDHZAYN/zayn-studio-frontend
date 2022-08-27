<template>
  <div style="display: flex;align-items: center">
    <div class="category" :style="{height: computedHeight+'px'}">
      <div class="category-for-flex" ref="categoryForFlex">
        <img v-for="(item, index) in items" :src="getUrl(item.pic)" :alt="item.name" @click="changeDisplay(index)"
             :class="['category-for-flex-element', {'on-display': index === onDisplayIndex, 'main-img-changing': isMainImgChanging}]">
      </div>
    </div>
    <div class="main" :style="{height: computedHeight+'px'}">
      <img :src="getUrl(items[onDisplayIndex].pic)" :alt="items[onDisplayIndex].name" ref="mainImg"
           :class="{'main-img-changing': isMainImgChanging}">
      <p :class="['main-name', {'main-img-changing': isMainNameChanging}]">{{ items[onDisplayIndex].name }}</p>
      <p :class="['main-desc', {'main-img-changing': isMainDescChanging}]">{{ items[onDisplayIndex].desc }}</p>
    </div>
    <div class="label" :style="{height: computedHeight+'px'}">
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
      computedHeight: 0,
      categoryDiff: 0,
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
      if (newIndex === this.onDisplayIndex) return;
      this.isMainImgChanging = true
      this.isMainNameChanging = true
      this.isMainDescChanging = true

      let categoryForFlex = this.$refs.categoryForFlex
      let oldTransform = document.defaultView.getComputedStyle(categoryForFlex).transform
      let diffTime = this.onDisplayIndex - newIndex
      oldTransform = oldTransform === 'none' ? 0 : oldTransform.split(',')[5];
      oldTransform = oldTransform === 0 ? 0 : parseFloat(oldTransform.substring(0, oldTransform.length - 1))
      categoryForFlex.style.transform = "translateY(" + (this.categoryDiff * diffTime + oldTransform) + "px)"

      let _this = this
      setTimeout(function () {
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
    getUrl(name){
      return getAssetsFile(name)
    }
  },
  mounted() {
    this.computedHeight = document.body.offsetWidth * 9 / 35
    this.categoryDiff = (this.computedHeight - document.body.offsetWidth * 3 / 14) / 4 + document.body.offsetWidth * 3 / 70
    this.changeDisplay(0)
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          this.computedHeight = document.body.offsetWidth * 9 / 35
          this.categoryDiff = (this.computedHeight - document.body.offsetWidth * 3 / 14) / 4 + document.body.offsetWidth * 3 / 70
          let node = this.$refs.categoryForFlex
          node.style.transform = "translateY(" + (this.categoryDiff * (2 - this.onDisplayIndex)) + "px)"
        });
      })();
    }
    let _this = this
    this.switchTimer = setInterval(function () {
      if (!_this.isMainDescChanging)
        _this.switchTimer += 1
    }, 1000)
  },
}
</script>

<style scoped>

.category {
  width: 20vw;
  /*background: white;*/
  overflow: hidden;
}

.category .category-for-flex {
  /*width: 15vw;*/
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.category .category-for-flex .category-for-flex-element {
  width: 10vw;
  margin-bottom: 1vw;
  transition: all 0.3s linear;
}

.category .category-for-flex .category-for-flex-element.on-display {
  /*box-shadow: -3px 4px 10px rgba(0, 0, 0, 1);*/
  filter: sepia(2) saturate(3) opacity(.5) drop-shadow(0 0 #FFCA02);
  transition: all 0.3s linear;
}

.category .category-for-flex .category-for-flex-element.main-img-changing {
  pointer-events: none;
}


.category .category-for-flex img:last-of-type {
  margin-bottom: 0;
}

.main {
  text-align: center;
}

.main img {
  /*height: 55vh;*/
  width: 60vw;
  object-fit: cover;
  box-shadow: -10px 20px 35px rgba(0, 0, 0, .4);
  /*margin: 0 auto;*/
  transition: all 0.3s linear;
}

.main img.main-img-changing {
  opacity: 0;
}

.main .main-name {
  display: block;
  margin: 0;
  color: #FFCA02;
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: bold;
  font-size: 6vw;
  transform: translateY(-4.5vw);
  text-shadow: 0 6px 6px rgba(0, 0, 0, .2);
  transition: opacity 0.35s linear, transform 0.35s ease-in-out;
}

.main .main-desc {
  display: inline-block;
  color: #FFCA02;
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1.5vw;
  transform: translateY(-5vw);
  padding: 1vw;
  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
  transition: opacity 0.4s linear, transform 0.4s ease-in-out;
}

.main .main-name.main-img-changing, .main-desc.main-img-changing {
  opacity: 0;
  transform: translateY(0);
}

.label {
  width: 20vw;
  /*background: white;*/
}
</style>