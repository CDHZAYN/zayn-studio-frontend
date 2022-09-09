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
    console.log(import.meta.env)
    this.$request.get('api/test',
        {
          params: {
            id: 1431,
          }
        }).then((response) => {
      console.log(response);
    });
  }
}
</script>

<style scoped>

</style>