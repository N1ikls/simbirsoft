import axios from "axios";
export default {
  state: {
    league: [],
    teams: [],
    error: false,
    isTeams: false,
  },
  mutations: {
    SET_INFO_LEAGUE_FOOTBALL: (state, league) => {
      state.league = league;
    },
    SET_INFO_TEAMS_FOOTBALL: (state, teams) => {
      state.teams = teams;
    },
    SET_INFO_ERROR_TEAMS: (state, error) => {
      state.error = error;
    },
    SET_INFO_TEAMS_ISTEAMS: (state, isTeams) => {
      state.isTeams = isTeams;
    },
  },
  actions: {
    async GET_INFO_LEAGUE_FOOTBALL({ commit }) {
      return await axios
        .get("http://api.football-data.org/v2/competitions", {
          headers: { "X-Auth-Token": process.env.VUE_APP_api_token },
          method: "GET",
        })
        .then((league) => {
          commit("SET_INFO_LEAGUE_FOOTBALL", league.data);
        })
        .catch((error) => console.log(error));
    },
    async GET_INFO_TEAMS_FOOTBALL({ commit }, id) {
      return await axios
        .get(`http://api.football-data.org/v2/competitions/${id}/teams`, {
          headers: { "X-Auth-Token": process.env.VUE_APP_api_token },
          method: "GET",
        })
        .then((teams) => {
          commit("SET_INFO_TEAMS_FOOTBALL", teams.data);
          commit("SET_INFO_TEAMS_ISTEAMS", true);
        })
        .catch(() => {
          commit("SET_INFO_ERROR_TEAMS", true);
        });
    },
  },
  getters: {
    league(state) {
      return state.league;
    },
    teams(state) {
      return state.teams;
    },
    errorTeams(state) {
      return state.error;
    },
    isTeams(state) {
      return state.isTeams;
    },
  },
};
