<template>
  <div class="blank"></div>
  <div id="games-background">
    <div class="games">
      <div class="game" v-for="item in items" @mouseenter="item.isHover = true" @mouseleave="item.isHover = false">
        <img :src="getUrl('studio.png')" :alt="item.name">
        <h1>{{ item.name }}</h1>
        <p v-for="keyword in item.keywords">{{ keyword }}</p>
        <Transition name="border1">
          <div class="game-border1" v-show="item.isHover"></div>
        </Transition>
        <Transition name="border2">
          <div class="game-border2" v-show="item.isHover"></div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="blank"></div>
</template>

<script>
import getAssetsFile from "../../assets/getAssetsFile.js";

export default {
  name: "Games",
  data() {
    return {
      items: [
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        }, {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        },
        {
          name: 'wuhu',
          keywords: ['wuhu1, wuhu2, wuhu3'],
          avatar: 'studio.png'
        }
      ]
    }
  },
  methods: {
    getUrl(name) {
      return getAssetsFile(name)
    }
  },
  mounted() {
    this.$request.get('/banner/get',
        {}).then((response) => {
      console.log(response);
    });
  }
}
</script>

<style scoped>

.border1-leave-active{
  transition-delay: 0.3s;
}

.border2-enter-active,
.border2-leave-active {
  transition: opacity 0.3s linear;
}

.border2-enter-from,
.border2-leave-to {
  opacity: 0
}

.blank {
  height: 50px;
}

#games-background {
  /*position: relative;*/
  width: 100vw;
  background: linear-gradient(#FAFAF4 0, #FAFAF4 80%, white 95%, white 100%);
  background-size: 100% 370px;
  background-position-y: -110px;
  /*z-index: -2;*/
}

.games {
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-around;
}

.games .game {
  width: 250px;
  height: 350px;
  margin: 10px;
  position: relative;
  background: #FAFAF4;
  border-radius: 10px;
  z-index: 2;
}

.games .game .game-border1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FAFAF4;
  border-radius: 10px;
  z-index: -1;
  transition: display 0.5s linear;
}

.games .game .game-border2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(255, 202, 2, 1) 0, rgba(232, 58, 55, 1) 100%);
  filter: blur(15px);
  border-radius: 10px;
  z-index: -2;
  transition: all 0.5s linear;
}

.games .game img {
  width: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.games .game h1 {
  margin: 8px;
  font-size: 23px;
  text-align: center;
}

.games .game p {
  margin: 10px;
  text-align: center;
}

</style>