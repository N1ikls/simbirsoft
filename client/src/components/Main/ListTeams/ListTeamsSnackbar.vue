<template>
  <div class="text-center">
    <v-snackbar v-model="snackbars" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="setSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ListTeamsSnackbar",
  data: () => ({
    text: "Даныне успешно получены !",
    timeout: 3000,
  }),
  computed: {
    ...mapGetters(["snackbar"]),
    snackbars: {
      get() {
        return this.snackbar;
      },
      set() {
        this.$store.commit("SET_SNACKBAR", false);
      },
    },
  },
  methods: {
    setSnackbar() {
      this.$store.commit("SET_SNACKBAR", false);
    },
  },
};
</script>

<style></style>
