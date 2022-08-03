import { createRouter, createWebHistory } from "vue-router";
import Home from "../routes/Home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About/",
    component: () => import("../routes/About.vue"),
  },
  {
    path: "/Projects/",
    component: () => import("../routes/Projects.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to) {
    // Start the route progress bar.
    // console.log("aslkmd");
    NProgress.start();
  }
  next();
});
/* eslint-disable-next-line */
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});
