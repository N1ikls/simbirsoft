<template>
  <v-app>
    <navigation></navigation>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navigation from "./components/Header/Header.vue";
export default {
  name: "App",
  components: {
    navigation,
  },

  data: () => ({
    //
  }),
};
</script>
