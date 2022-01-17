<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap");
</style>
