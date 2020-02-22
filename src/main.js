import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "@/App";

new Vue({
  render: h => h(App)
}).$mount("#app");

document.title = "Vue Sandbox";
