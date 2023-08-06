import Components from "unplugin-vue-components/vite";
import vue from "@vitejs/plugin-vue2";
import AutoImport from "unplugin-auto-import/vite";
import lightningcss from "vite-plugin-lightningcss";
module.exports = {
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: ["vue"],
    }),
    lightningcss({
      browserslist: ">= 0.25%",
    }),
  ],
};
