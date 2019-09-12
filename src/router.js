import Vue from "vue";
import Router from "vue-router";
import Home from "components/Home.vue";
import Index from "views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          name: "首页",
          component: Index
        }
      ]
    }
  ]
});
