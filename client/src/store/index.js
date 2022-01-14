import Vue from "vue";
import Vuex from "vuex";
import football from "./modules/football";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    football,
  },
});
