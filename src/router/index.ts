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
        component: () => import("@/components/Principal.vue")
      }
    ]
  },
  {
    path: "/movie/:id",
    component: () => import("@/components/MediaDetails.vue"),
    name: "movie.details"
  },
  {
    path: "/serie/:id",
    component: () => import("@/components/MediaDetails.vue"),
    name: "serie.details"
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
