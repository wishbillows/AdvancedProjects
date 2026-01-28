import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      // vite 配置
      alias: {
        "@": resolve(__dirname, "./src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
    plugins: [vue()],
  };
});
