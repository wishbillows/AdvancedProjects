import { createApp } from "vue";
import router from '@/router/index';
import pinia from '@/stores'
// import './style.css'
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app")
