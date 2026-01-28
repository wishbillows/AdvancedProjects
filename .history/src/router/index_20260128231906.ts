import {createWebHashHistory,createRouter} from 'vue-router'
import Login from '@/views/login/index.vue';
import Layouts from '@/layouts/index.vue'
// 引入 views 文件夹下所有 vue 文件
// const modules = import.meta.glob("@/views/**/*.vue");
const routes = [
  { path: "/", component: Login },
  { path: "/layouts", name: "Layouts", component: Layouts },
  { path: "/login", name:"login",component: Login },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;