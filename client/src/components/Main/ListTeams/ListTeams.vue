<template>
  <v-container>
    <v-data-iterator
      :items="getListTeams"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template #header>
        <ListTeamsToolbar
          :keys="keys"
          :search.sync="search"
          :sortBy.sync="sortBy"
          :sortDesc.sync="sortDesc"
        />
      </template>

      <template #default="props">
        <ListTeamsCard
          :props="props"
          :filteredKeys="filteredKeys"
          :sortBy="sortBy"
        />
      </template>

      <template #footer>
        <ListTeamsMenu
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
    <Snackbar />
  </v-container>
</template>

<script>
import Snackbar from "./ListTeamsSnackbar.vue";
import List from "../ListLeagues/List.js";
import { mapGetters } from "vuex";
import ListTeamsToolbar from "../ListLeagues/ListLeaguesToolbar.vue";
import ListTeamsMenu from "../ListLeagues/ListLeaguesMenu.vue";
import ListTeamsCard from "./ListTeamsCard.vue";
export default {
  components: {
    ListTeamsToolbar,
    ListTeamsMenu,
    ListTeamsCard,
    Snackbar,
  },
  mounted() {},
  methods: {
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
    ...mapGetters(["teams"]),
    //
    numberOfPages() {
      return List.pages(this.getCount, this.itemsPerPage);
    },
    //
    filteredKeys() {
      return List.filterKeys(this.keys);
    },
    // выгружаем данные из url и берем обьект "competitions"
    getListTeams() {
      return List.getListTeams(this.teams);
    },
    // считываем количество
    getCount() {
      return List.getCount(this.teams);
    },
    // area name
    getArea() {
      return List.getArea(this.teams);
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
      keys: ["Name"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
