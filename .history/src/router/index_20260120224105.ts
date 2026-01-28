import {createWebHashHistory,createRouter} from 'vue-router'

const routes = [
  { path: "/", component: Login },
  // { path: "/layouts", name: "Layouts", component: Layouts },
  // { path: "/login", component: Login },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;