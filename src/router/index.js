import { createRouter, createWebHashHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
