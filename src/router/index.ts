import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: { name: "search.main" }
  },
  {
    path: "/search",
    component: () => import("@/views/Main.vue"),
    children: [
      {
        path: "",
        name: "search.main",
        component: () => import("@/components/List.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
