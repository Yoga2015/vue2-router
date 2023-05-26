<template>
  <div>
    <h4>About组件的内容</h4>

    <!-- router-link 子级路由链接   -->
    <router-link active-class="active" to="/about/news">
      News
    </router-link> &nbsp; &nbsp;
    <router-link active-class="active" to="/about/message">
      Message
    </router-link><br>

    <!-- <keep-alive>标签 可以 将 组件缓存，而不是在切换显示时被销毁。 -->
    <!-- <keep-alive include="myNews"> -->
    <!-- router-view 子路由占位符 -->
    <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->

    <!-- <keep-alive> 缓存多个路由组件 -->
    <keep-alive :include="['myNews', 'myMessage']">
      <!-- router-view 子路由占位符 -->
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'myAbout',
  // mounted() {
  //   console.log('About 组件 挂载完毕了', this);
  //   window.aboutRoute = this.$route;
  //   window.aboutRouter = this.$router;
  // },
  // beforeDestroy() {
  //   console.log('About 组件 即将被销毁了');
  // }
}
</script>
