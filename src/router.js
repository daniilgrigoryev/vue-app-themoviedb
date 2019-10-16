import Vue from "vue"
import VueRouter from "vue-router"

import PageNotFound from "./components/pages/404.vue"
import Main from "./components/pages/Main.vue"
import Movie from "./components/pages/Movie.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound,
    },
    {
      name: "Movie",
      path: "/movie/:id",
      component: Movie,
    },
  ],
})
export default router
