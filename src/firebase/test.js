import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config.js";

// eslint-disable-next-line no-unused-vars
export const test = (function () {
  initializeApp(firebaseConfig);
})();
