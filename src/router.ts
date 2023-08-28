import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";

// import test from "./views/test.vue";
// 路由懒加载
const test = () => import("./views/test.vue");
const login = () => import("./views/login/index.vue");

const routes = [
  { path: "/", component: test },
  { path: "/login", component: login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.afterEach((to, from) => {
//   setTimeout(() => {
//   }, 100);
// });

export default router;