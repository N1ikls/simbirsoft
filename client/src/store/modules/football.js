import axios from "axios";
export default {
  state: {
    league: [],
    teams: [],
  },
  mutations: {
    SET_INFO_LEAGUE_FOOTBALL: (state, league) => {
      state.league = league;
    },
    SET_INFO_TEAMS_FOOTBALL: (state, teams) => {
      state.teams = teams;
    },
  },
  actions: {
    GET_INFO_LEAGUE_FOOTBALL({ commit }) {
      return axios("http://api.football-data.org/v2/competitions", {
        headers: { "X-Auth-Token": process.env.VUE_APP_api_token },
        method: "GET",
      })
        .then((league) => {
          commit("SET_INFO_LEAGUE_FOOTBALL", league.data);
        })
        .catch((error) => console.log(error));
    },
    GET_INFO_TEAMS_FOOTBALL({ commit }, id) {
      return axios(`http://api.football-data.org/v2/competitions/${id}/teams`, {
        headers: { "X-Auth-Token": process.env.VUE_APP_api_token },
        method: "GET",
      })
        .then((teams) => {
          commit("SET_INFO_TEAMS_FOOTBALL", teams.data);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    league(state) {
      return state.league;
    },
    teams(state) {
      return state.teams;
    },
  },
};
