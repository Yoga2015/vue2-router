<template>
  <div>
    <!-- router-link 第三级 子路由链接 -->
    <ul>
      <li v-for="m in messageList" :key="m.id">

        <!-- 跳转路由 并 携带 query 参数 , to 的 字符串写法 -->
        <!-- <router-link :to='`/about/message/detail?id=${m.id}&title=${m.title}`'>
          {{ m.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 query 参数 , to 的 对象写法 -->
        <!-- <router-link :to="{
          path: '/about/message/detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">
          {{ m.title }}
        </router-link> -->

        <!-- 跳转路由 并 携带 params 参数，to 的字符串写法 -->
        <router-link :to="`/about/message/detail/${m.id}/${m.title}`">
          {{ m.title }}
        </router-link>

        <!-- 跳转路由 并 携带 params 参数， to 的 对象写法 -->
        <!-- <router-link :to="{
          name: 'xiaoxi',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{ m.title }}
        </router-link> -->

      </li>
    </ul>
    <!-- router-view 子路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myMessage',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
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
