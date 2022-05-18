import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "blank",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/peliculas",
    name: "peliculas",
    component: () => import("../views/PeliculasView.vue"),
  },
  {
    path: "/juegos",
    name: "juegos",
    component: () => import("../views/JuegosView.vue"),
  },
  {
    path: "/peliculas/:miau",
    component: () => import("@/views/DescripcionPeliculaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
