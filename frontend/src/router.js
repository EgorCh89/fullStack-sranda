import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import Calculator from "./views/Calculator.vue";

const User = {
  template: "<div>User 69</div>",
};

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/calculator", component: Calculator },
  ],
});
