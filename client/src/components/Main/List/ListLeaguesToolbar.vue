<template>
  <v-toolbar dark color="blue darken-3" class="mb-1">
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
export default {
  name: "ListLeaguesToolbar",
  props: {
    search: String,
    keys: Array,
    sortBy: String,
    sortDesc: Boolean,
  },
  computed: {
    searchInput: {
      get() {
        return this.search;
      },
      set(newValue) {
        this.$emit("update:search", newValue);
      },
    },
    sortDescInput: {
      get() {
        return this.sortDesc;
      },
      set(newValue) {
        this.$emit("update:sortDesc", newValue);
      },
    },
    sortByInput: {
      get() {
        return this.sortBy;
      },
      set(newValue) {
        this.$emit("update:sortBy", newValue);
      },
    },
  },
};
</script>

<style></style>
