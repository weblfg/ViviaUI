import Vue from "vue";
import App from "./App.vue";
import VButton from "./components/button.vue";


Vue.config.productionTip = false;
Vue.component(VButton.name, VButton);

new Vue({
  render: h => h(App)
}).$mount("#app");
