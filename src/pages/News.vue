<template>
  <div>
    <!-- router-link 第三级 子路由链接 -->
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li v-for="n in newsList" :key="n.id">

        <!-- 跳转路由 并 携带 query 参数 , to 的 字符串写法 -->
        <!-- <router-link :to='`/about/news/detail?id=${n.id}&title=${n.title}`'>
          {{ n.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 query 参数 , to 的 对象写法 -->
        <router-link replace :to="{
          path: '/about/news/detail',
          query: {
            id: n.id,
            title: n.title
          }
        }">
          {{ n.title }}
          <input type="text">
        </router-link>

        <!-- 跳转路由 并 携带 params 参数 , to 的 字符串写法 -->
        <!-- <router-link :to='`/about/news/detail/${n.id}/${n.title}`'>
          {{ n.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 params 参数 , to 的 对象写法 -->
        <!-- <router-link :to="{
          name: 'xinwen',
          params: {
            id: n.id,
            title: n.title
          }
        }">
          {{ n.title }}
        </router-link> -->

      </li>
    </ul>
    <!-- router-view 子路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myNews',
  data() {
    return {
      newsList: [
        { id: '001', title: '新闻001' },
        { id: '002', title: '新闻002' },
        { id: '003', title: '新闻003' },
      ],
      opacity: 1
    }
  },

  //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log('setInterval')
  //     this.opacity -= 0.01
  //     if (this.opacity <= 0) this.opacity = 1
  //   }, 16)
  // },

  // beforeDestroy() {
  //   console.log('News组件 即将被销毁了');
  //   clearInterval(this.timer)
  // },

  // 当 组件 被 <keep-alive>标签 包裹的时候，才可以使用 activated、deactivated 生命周期函数
  // News组件被激活了
  activated() {
    console.log('News组件 被 激活 了,activated');
    this.timer = setInterval(() => {
      console.log('setInterval')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  // News组件被缓存了
  deactivated() {
    console.log('News组件 被 缓存 了,deactivated');
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
