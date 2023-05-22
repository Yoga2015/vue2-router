<template>
  <div>
    <h2>About组件的内容</h2>
    <!-- router-link 子级路由链接   -->
    <router-link active-class="active" to="/about">News</router-link> &nbsp; &nbsp;
    <router-link active-class="active" to="/about/message">Message</router-link>
    <hr>
    <!-- router-view 子路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myAbout',
  mounted() {
    console.log('About 组件 挂载完毕了', this);
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
  beforeDestroy() {
    console.log('About 组件 即将被销毁了');
  }
}
</script>
