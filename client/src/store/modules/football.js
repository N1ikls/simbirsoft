import axios from "axios";
export default {
  state: {
    football: [],
  },
  mutations: {
    SET_INFO_FOOTBALL: (state, football) => {
      state.football = football;
    },
  },
  actions: {
    GET_INFO_FOOTBALL({ commit }) {
      return axios("https://api.football-data.org/v2/matches", {
        headers: { "X-Auth-Token": process.env.VUE_APP_api_token },
        method: "GET",
      })
        .then((football) => {
          commit("SET_INFO_FOOTBALL", football.data);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    football(state) {
      return state.football;
    },
  },
};
