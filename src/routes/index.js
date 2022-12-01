import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import About from "./About.vue";
import NotFound from "./NotFound.vue";

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
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
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
