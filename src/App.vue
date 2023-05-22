<template>
  <div id="app">
    <!-- 此时 Banner组件 作为 一般组件 -->
    <Banner></Banner>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">

          <!-- 原始 html 中 我们使用 a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助 router-link标签 实现 路由的切换 ，active-class 可配置高亮样式-->
          <router-link replace class="list-group-item" active-class="active" to="/home">
            Home
          </router-link>
          <router-link replace class="list-group-item" active-class="active" to="/about">
            About
          </router-link>

        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- router-view  路由占位符  -->
            <!-- 路由 匹配到的组件 将渲染在这里 -->
            <router-view></router-view>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components: {
    Banner
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
