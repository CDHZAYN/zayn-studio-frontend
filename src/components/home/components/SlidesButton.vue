<template>
  <div class="button" @mouseenter="isHover = true" @mouseleave="isHover = false"
       @click="$emit('back', type === 'BACK' ? -1 : 1)" style="right: 10%;top: 70%;">
    <div class="button-img-frame" v-if="type==='BACK'">
      <Transition type="transition" mode="out-in">
        <img src="/arrow.png" alt="back" class="button-img" v-if="!isHover"/>
        <img src="/studio.png" alt="back" class="button-img" v-else/>
      </Transition>
    </div>
    <div class="button-word-frame">
      <Transition type="transition" mode="out-in">
        <h6 class="button-word" v-if="!isHover" :style="{'text-align': type === 'NEXT'? 'right' : 'left'}"
            key="q1">
          {{ type }}
        </h6>
        <h6 :class="['button-word', {'button-on-hover': isHover}]" v-else key="q2">
          {{ buttonName }}</h6>
      </Transition>
    </div>
    <div class="button-img-frame" v-if="type==='NEXT'">
      <Transition type="transition" mode="out-in">
        <img src="/arrow.png" alt="back" class="button-img" style="transform: rotate(180deg)"
             v-if="!isHover"/>
        <img src="/studio.png" alt="back" class="button-img" v-else/>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlidesButtonBack",
  props: {
    buttonName: String,
    type: String
  },
  data() {
    return {
      isHover: false,
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.button {
  display: inline-block;
  width: 9vw;
  height: 2vw;
  position: absolute;
  margin: 0;
  padding: 0.5vw;
  box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);
  border: 3px solid;
  border-image: linear-gradient(to right top, rgba(255, 255, 255, .0) 50%, rgba(255, 255, 255, .8) 100%) 20 20;
  background-color: rgba(255, 255, 255, .1);
}

.button .button-img-frame {
  display: inline-block;
  width: 2vw;
  height: 2vw;
  white-space: nowrap;
}

.button .button-img {
  max-width: 100%;
  height: auto;
}

.button .button-word-frame {
  width: 6vw;
  display: inline-block;
  margin: 0 0.5vw 0 0.5vw;
  overflow: hidden;
  /*transform: translateY(0.1vw);*/
  user-select: none;
}

.button .button-word-frame .button-word {
  min-width: 100%;
  white-space: nowrap;
  margin: 0;
  float: left;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
  font-size: 1.5vw;
  font-weight: normal;

  position: relative;
}

.button .button-word-frame .button-word.button-on-hover {
  animation: scroll ease-in-out 3s alternate infinite;
}
</style>