import { createApp } from "vue";
import App from "./App.vue";
import router from '@/router/index';
import pinia from '@/stores'
import ElementPlus  from 'element-plus'


const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app")
