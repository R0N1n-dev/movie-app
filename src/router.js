import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    // NOTE: you can also apply meta information
    // meta: {authRequired: false }
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/movies/:id",
    name: "singleMovie",
    component: () => import("./views/SingleMovie.vue"),
  },
  {
    path: "/:path(.*)",
    name: "NotFound",
    component: () => import("./views/NotFound.vue"),
  },
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});

export default router;
