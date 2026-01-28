import { createApp } from "vue";
import App from "./App.vue";
import router from '@/router/index';
import pinia from '@/stores';
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from "@element-plus/icons-vue";

Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app")
