<template>
  <div v-for="item in list" class="wuhu" :data-background="item.test"/>
</template>

<script>
export default {
  name: "Forum",
  data() {
    return {
      list: [
        {
          id: 1,
          test: 'red'
        },{
          id: 2,
          test: 'blue'
        }
      ],
      test: 'red',
    }
  },
  methods: {}
}
</script>

<style scoped>
.wuhu[data-background="red"]{
  width: 100px;
  height: 100px;
  background: red;
}

</style>