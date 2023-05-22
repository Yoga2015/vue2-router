<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
    <!-- <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li> -->
  </ul>
</template>

<script>
export default {
  name: 'MyDetail',
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>