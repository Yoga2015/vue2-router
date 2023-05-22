// 引入 vue-router
import VueRouter from "vue-router";

// 引入 路由对应的组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建 router 实例对象，去管理一组一组的路由规则
export default new VueRouter({
  routes: [
    // 路由规则 :{ 路由地址，路由对应的组件}

    // 重定向路由规则
    // 当用户访问 / 的时候，通过 redirect 属性 跳转到 /Home 对应的路由规则 
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },

    // 嵌套路由
    {
      path: '/about',
      component: About,
      redirect: '/about/news',
      // 1、通过 children 属性，嵌套 声明 子级路由规则 ，/news 、/message 都可以不加斜线
      children: [
        // 访问 /about/news 时，展示 News组件
        {
          path: 'news',
          component: News,
          children: [
            {
              name: 'xinwen',    // 路由命名，当 路由地址 太长时，才会使用命名路由
              path: 'detail/:id/:title',
              component: Detail,
              props: true
            }
          ]
        },

        // 访问 /about/message 时，展示 Message组件
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail
            }
          ]
        }
      ]
    },
  ]
})