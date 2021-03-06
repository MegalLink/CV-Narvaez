import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../pages/Resume.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../pages/Portfolio.vue"),
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
