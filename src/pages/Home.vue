<template>
  <div>
    <h4>Home组件的内容</h4>
  </div>
</template>

<script>
export default {
  name: 'myHome',
  // mounted() {
  //   // console.log('Home 组件 挂载完毕了', this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
  // beforeDestroy() {
  //   console.log('Home 组件 即将被销毁了');
  // },
  mounted() {
    console.log('@@', this.$route);
  },

  // 通过路由规则, 进入 该组件时 被调用
  beforeRouteEnter(to, from, next) {

  },
  // 通过路由规则, 离开 该组件时 被调用
  beforeRouteLeave(to, from, next) {

  }
}
</script>

