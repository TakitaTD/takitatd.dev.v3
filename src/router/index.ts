import { createRouter, createWebHistory } from "vue-router";
import Home from "../routes/Home.vue";

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
