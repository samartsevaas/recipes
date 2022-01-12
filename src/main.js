import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAppleAlt,
  faCarrot,
  faSeedling,
  faLemon,
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

library.add(
    faAppleAlt,
    faCarrot,
    faSeedling,
    faLemon,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
