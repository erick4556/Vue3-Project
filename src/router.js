import { createRouter, createWebHistory } from "vue-router";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
import User from "./views/User.vue";
import UserProfile from "./views/UserProfile.vue";
import UserConfig from "./views/UserConfig.vue";
import Login from "./views/Login.vue";
import NotFound from "./views/NotFound.vue";

const beforeEnterHook = (to) => {
  console.log("Path: " + to.path);
};

const Home = () => import("./views/Home.vue"); // Lazy load. Solo cuando accedan a la ruta home solo se va a cargar esa ruta
const About = () => import("./views/About.vue"); // Lazy load

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: [beforeEnterHook], //Ejecuta un guard en caso que se acceda a esa ruta, se puede agregar n cantidad de funciones, que se van a ejecutar antes de ingresar a la ruta
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users/:name",
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
  {
    path: "/:pathMatch(.*)*", //Ruta generica, muestra todas las rutas que no son parte de la aplicación
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"), //Para hacer la referencia cuando se vaya a usar un dominio
  routes,
});

// Se ejecuta al inicio de cada una de las rutas se vaya a acceder. Lo primero que va hacer el router es ejecutar este método cuando se ingresa a una ruta
router.beforeEach((to, from, next) => {
  let isAuthenticated = true;
  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
