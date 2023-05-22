<template>
  <div>
    <ul>
      <li v-for="n in newsList" :key="n.id">

        <!-- 跳转路由 并 携带 query 参数 , to 的 字符串写法 -->
        <!-- <router-link :to='`/about/news/detail?id=${n.id}&title=${n.title}`'>
          {{ n.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 query 参数 , to 的 对象写法 -->
        <!-- <router-link :to="{
          path: '/about/news/detail',
          query: {
            id: n.id,
            title: n.title
          }
        }">
          {{ n.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 params 参数 , to 的 字符串写法 -->
        <router-link :to='`/about/news/detail/${n.id}/${n.title}`'>
          {{ n.title }}
        </router-link>

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
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
