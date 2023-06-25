import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import Calculator from "./views/Calculator.vue";
import QuizPage from "./views/QuizPage.vue";
const User = {
  template: "<div>User 69</div>",
};

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/calculator", component: Calculator },
    { path: "/quiz", component: QuizPage },
  ],
});
