<template>
  <Transition mode="out-in"><!--mode只适用于一个transition内的同标签切换-->
    <h6 v-if="show" key="but1">on</h6>
    <h6 v-else key="but2">{{ show }}</h6><!--key为了防止只是修改内容不重新渲染-->
  </Transition>
  <button style="margin-top: 100px;" @click="show=!show">切换</button>
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

.v-enter-active{
  transition: 0.5s ease;
}
.v-leave-active{
  transition: 0.5s ease;
}
.v-enter-from,.v-leave-to{
  opacity: 0;
}

</style>