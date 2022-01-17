import Vue from "vue";
import VueRouter from "vue-router";
import Leagues from "../views/Leagues.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Leagues",
    component: Leagues,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
