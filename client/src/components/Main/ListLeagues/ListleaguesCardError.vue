<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Ошибка </v-card-title>
        <v-card-text> Данные не получены, попробуйте другую лигу </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="setDialog(false)">
            Понятно
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ListLeaguesCardError",
  props: {
    dialog: Boolean,
  },
  methods: {
    setDialog(bool) {
      this.$store.commit("SET_INFO_ERROR_TEAMS", bool);
    },
  },
};
</script>

<style></style>
