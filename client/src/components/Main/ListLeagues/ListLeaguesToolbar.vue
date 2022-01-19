<template>
  <v-toolbar dark class="mb-1 v-toolbar">
    <v-text-field
      v-model="searchInput"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
    ></v-text-field>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-select
        v-model="sortByInput"
        flat
        solo-inverted
        hide-details
        :items="keys"
        prepend-inner-icon="mdi-magnify"
        label="Sort by"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="sortDescInput" mandatory>
        <v-btn large depressed color="blue" :value="false">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn large depressed color="blue" :value="true">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar>
</template>

<script>
import ListLeaguesToolbar from "./ListLeaguesToolbar.js";
export default {
  name: "ListLeaguesToolbar",
  props: {
    search: String,
    keys: Array,
    sortBy: String,
    sortDesc: Boolean,
  },
  computed: {
    ...ListLeaguesToolbar.computed,
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
}
</style>
