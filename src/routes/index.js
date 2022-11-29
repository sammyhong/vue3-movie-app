import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import About from "./About.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/", // -> 메인페이지로 이동하겠다.
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/movie",
      component: Movie,
    },
  ],
});
