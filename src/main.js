import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import EasySlider from "vue-easy-slider";
import "@/assets/styles/main.scss";
// eslint-disable-next-line
import { init } from './firebase/init';
// eslint-disable-next-line no-unused-vars
import Services from "./services";
Vue.prototype.$services = Services;
import store from "./store";
store.$services = Services;

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAppleAlt,
  faCarrot,
  faSeedling,
  faLemon,
  faBell,
  faHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(EasySlider);

library.add(
  faAppleAlt,
  faCarrot,
  faSeedling,
  faLemon,
  faBell,
  faHeart,
  faClock
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
