<template>
  <p>this is games</p>
  <p>{{ test }}</p>
</template>

<script>

export default {
  name: "Games",
  data() {
    return {
      test: null,
    }
  },
  mounted() {
    this.$request.get('/banner/get',
        {
        }).then((response) => {
      console.log(response);
    });
  }
}
</script>

<style scoped>

</style>