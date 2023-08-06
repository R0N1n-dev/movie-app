import Vue from "vue";
import router from "./router";
import "./assets/main.css";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";
import App from "./App.vue";
Vue.config.productionTip = false;
Vue.use(Vuesax);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
