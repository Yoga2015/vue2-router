<template>
  <div>
    <!-- router-link 第三级 子路由链接 -->
    <ul>
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
      ]
    }
  },
  beforeDestroy() {
    console.log('News组件 即将被销毁了');
  },
  // 当 组件 被 <keep-alive>标签 包裹的时候，才可以使用 activated、deactivated 生命周期函数
  // News组件被激活了
  activated() {
    console.log('News组件被激活了,activated');
  },
  // News组件被缓存了
  deactivated() {
    console.log('News组件被缓存了,deactivated');
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
