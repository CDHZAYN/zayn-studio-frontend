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
    this.$axios.get('api/test',
        {
          params: {
            id: 1431,
          }
        }).then((response) => {
          this.test=response.request.response
      console.log(response.request.config);
    });
  }
}
</script>

<style scoped>

</style>