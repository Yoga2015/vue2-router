import Vue from "vue";
import App from "./App.vue";

// 1、引入 vue-router
import VueRouter from "vue-router";
import router from "./router/index.js";

Vue.config.productionTip = false;

// 2、使用 vue-router
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  // 3、挂载路由实例
  // router:router,  当 属性 与 属性值一样，可以简写
  router,
}).$mount("#app");
