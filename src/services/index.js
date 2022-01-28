import { registration } from "./auth/index";
import { data } from "./info/index";

export default {
  registration: new registration(),
  data: new data(),
};
