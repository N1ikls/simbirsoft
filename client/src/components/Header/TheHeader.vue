<template>
  <v-app-bar class="header" elevation="4" app dense>
    <v-container>
      <v-row justify="space-around" align="center">
        <v-toolbar-title
          v-for="(items, index) in link"
          :key="index"
          class="header__link link"
        >
          {{ items.title }}
        </v-toolbar-title>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => {
    return {
      link: [
        {
          title: "Список лиг/соревнований",
          route: "",
        },
        {
          title: "Календарь лиги",
          route: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
