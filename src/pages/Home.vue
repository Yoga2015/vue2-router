<template>
  <div>
    <h4>Home组件的内容</h4>
  </div>
</template>

<script>
export default {
  name: 'myHome',
  mounted() {
    console.log('Home 组件 挂载完毕了', this);
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
  beforeDestroy() {
    console.log('Home 组件 即将被销毁了');
  }
}
</script>

