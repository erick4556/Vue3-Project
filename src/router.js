import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";
import UserProfile from "./views/UserProfile.vue";
import UserConfig from "./views/UserConfig.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/users/:id",
    name: "User",
    component: User,
    //Para rutas anidadas
    children: [
      {
        // /user/name/profile
        path: "profile",
        component: UserProfile,
      },
      {
        // /user/name/config
        path: "config",
        component: UserConfig,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"), //Para hacer la referencia cuando se vaya a usar un dominio
  routes,
});

export default router;
