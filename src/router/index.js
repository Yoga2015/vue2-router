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
      // 通过 children 属性，嵌套 声明 子级路由规则 ，/news 、/message 都可以不加斜线
      children: [
        // 第二级 子级路由链接

        // 访问 /about/news 时，展示 News组件    query参数
        {
          path: 'news',
          component: News,
          children: [
            // 第三级 子级路由链接
            {
              path: 'detail',
              component: Detail,
            }
          ]
        },

        // 访问 /about/message 时，展示 Message组件   params参数
        {
          path: 'message',
          component: Message,
          children: [
            // 第三级 子级路由链接
            {
              name: 'xiaoxi',    // 路由命名，当 路由地址 太长时，才会使用命名路由，搭配 params 参数
              path: 'detail/:id/:title',
              component: Detail,

              // props的第一种写法：值 为对象，该对象中所有的key-value的组合，最终都会通过props传给 Detail组件
              // props: { a: '333', b: '666' },

              // props的第二种写法：值 为布尔值,布尔值为真,就会把 该路由组件收到的所有params参数，以props的形式传给 Detail组件
              // 就好像意味着 接收到的 id、title 都会 以 props 的形式 传给 Detail组件
              props: true,

              // props的第三种写法：值 为函数 ,该函数返回的对象中每一组key-value都会通过props传给Detail组件  （一般不用）
              // props() {
              //   return { id: '666', title: '你好呀' }
              // }
            }
          ]
        }

      ]
    },
  ]
})