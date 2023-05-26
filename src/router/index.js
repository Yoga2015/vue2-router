// 引入 vue-router
import VueRouter from "vue-router";

// 引入 路由对应的组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建 一个路由器，即：创建 一个 router 实例对象，然后去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    // 路由规则 :{ 路由地址，路由对应的组件}

    // 重定向路由规则
    // 当用户访问 / 的时候，通过 redirect 属性 跳转到 /Home 对应的路由规则 
    {
      name: 'genmulu',
      path: '/',
      redirect: '/home',
      meta: { title: 'vue2.0-router' }
    },

    {
      name: 'shouye',
      path: '/home',
      component: Home,
      meta: { title: '首页' }
    },

    // 嵌套路由
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { title: '关于' },
      // 通过 children 属性，嵌套 声明 子级路由规则 ，/news 、/message 都可以不加斜线
      children: [
        // 第二级 子级路由链接

        // 访问 /about/news 时，展示 News组件    query参数
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },
          // 独享守卫
          // beforeEnter: (to, from, next) => {
          //   console.log('独享守卫', to, from);
          //   if (to.meta.isAuth) {  // 判断当前路由是否需要进行权限控制
          //     if (localStorage.getItem('school') === 'qinghua') {  // 权限控制的具体规则
          //       next()
          //     } else {
          //       alert('学校名不对，无权限访问')
          //     }
          //   } else {
          //     next()
          //   }
          // },
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
          name: 'xinxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '信息' },
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

// 为 router 实例对象，声明 全局前置路由守卫
// 只要发生了路由的跳转 , 必然会触发 beforeEach 指定的 function 回调函数
// function 回调函数 可以写成 箭头函数  ，它其实也叫  守卫方法
// 全局前置路由守卫 --- 初始化的时候 被调用 、每次路由切换之前 被调用
// router.beforeEach((to, from, next) => {
//   // 这个回调函数 ，是指定 一个路由每次切换时，所调用的函数
//   console.log('@');  // 证明了是 初始化的时候 被调用 ; 每次路由切换之前 也被调用
//   console.log('前置路由守卫', to, from);  // to 是 将要访问的 路由路径 的信息对象  from 是将要离开的 路由路径 的信息对象
//   // 此时这个路由守卫把所有的东西都拦着了，所以你访问 哪个路径都没有内容显示,除非使用 next()
//   // next()  // next 是一个函数 ，调用 next() 表示放行，允许这次 路由跳转（路由导航）

//   // document.title = to.meta.title || 'walking'   放在这里位置不对

//   // if (to.path === '/about/news' || to.path === '/about/message') {
//   // if (to.name === 'xinwen' || to.name === 'xinxi') {
//   if (to.meta.isAuth) {  // 判断当前路由是否需要进行权限控制
//     if (localStorage.getItem('school') === 'qinghua') {  // 权限控制的具体规则
//       // document.title = to.meta.title || 'walking'
//       next()
//     } else {
//       alert('学校名不对，暂无权限查看')
//     }
//   } else {
//     // document.title = to.meta.title || 'walking'
//     next()
//   }
// })


// 全局后置路由守卫--- 初始化的时候 被调用 、每次路由切换之后 被调用     不常用
// 守卫方法中没有 next 参数
// router.afterEach((to, from) => {
//   console.log('后置路由守卫', to, from);
//   document.title = to.meta.title || 'walking'
// })


// 暴露一个路由器
export default router