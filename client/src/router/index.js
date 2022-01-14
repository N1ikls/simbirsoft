import Vue from "vue";
import VueRouter from "vue-router";
import TableLeagues from "../views/TableLeagues.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TableLeagues",
    component: TableLeagues,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
