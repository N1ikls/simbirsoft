<template>
  <v-container>
    <v-data-iterator
      :items="getListLeague"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template #header>
        <ListLeaguesToolbar
          :keys="keys"
          :search.sync="search"
          :sortBy.sync="sortBy"
          :sortDesc.sync="sortDesc"
        />
      </template>

      <template #default="props">
        <ListLeaguesCard
          :getApi="GET_INFO_TEAMS_FOOTBALL"
          :props="props"
          :filteredKeys="filteredKeys"
          :sortBy="sortBy"
        />
      </template>

      <template #footer>
        <ListLeaguesMenu
          :itemsPerPageArray="itemsPerPageArray"
          :formerPage="formerPage"
          :itemsPerPage="itemsPerPage"
          :nextPage="nextPage"
          :numberOfPages="numberOfPages"
          :page="page"
          :updateItemsPerPage="updateItemsPerPage"
        />
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import Leagues from "../ListLeagues/ListLeagues.js";
import { mapActions, mapGetters } from "vuex";
import ListLeaguesToolbar from "../ListLeagues/ListLeaguesToolbar.vue";
import ListLeaguesMenu from "../ListLeagues/ListLeaguesMenu.vue";
import ListLeaguesCard from "../ListLeagues/ListLeaguesCard.vue";
export default {
  components: {
    ListLeaguesToolbar,
    ListLeaguesMenu,
    ListLeaguesCard,
  },
  mounted() {
    this.GET_INFO_LEAGUE_FOOTBALL();
  },
  methods: {
    ...mapActions(["GET_INFO_LEAGUE_FOOTBALL", "GET_INFO_TEAMS_FOOTBALL"]),
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
  computed: {
    ...mapGetters(["league"]),
    //
    numberOfPages() {
      return Leagues.pages(this.getCount, this.itemsPerPage);
    },
    //
    filteredKeys() {
      return Leagues.filterKeys(this.keys);
    },
    // выгружаем данные из url и берем обьект "competitions"
    getListLeague() {
      return Leagues.getLeagues(this.league);
    },
    // считываем количество
    getCount() {
      return Leagues.getCount(this.league);
    },
    // area name
    getArea() {
      return Leagues.getArea(this.league);
    },
  },
  name: "ListTeams",
  data() {
    return {
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPageArray: [4, 8, 12, 20],
      itemsPerPage: 4,
      sortBy: "",
      keys: ["Name", "area"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
