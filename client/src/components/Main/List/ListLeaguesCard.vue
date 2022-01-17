<template>
  <v-row>
    <v-col
      v-for="item in props.items"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card elevation="3" shaped>
        <v-card-title
          style="font-family: Space Grotesk, sans-serif"
          class="subheading font-weight-bold"
        >
          {{ item.name }}
        </v-card-title>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="(key, index) in filteredKeys" :key="index">
            <v-list-item-content
              style="font-size: 20px; font-family: Space Grotesk, sans-serif"
              :class="{ 'blue--text': sortBy === key }"
            >
              {{ key }}:
            </v-list-item-content>
            <v-list-item-content
              class="align-end"
              style="font-size: 20px; font-family: Space Grotesk, sans-serif"
              :class="{ 'green--text': sortBy === key }"
            >
              {{ item[key.toLowerCase()].name }}
            </v-list-item-content>
          </v-list-item>
          <v-btn class="btn" @click="getTeams(item.id)">Список команд</v-btn>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListLeaguesCard",
  props: {
    props: Object,
    filteredKeys: Array,
    getTeams: Function,
  },
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
