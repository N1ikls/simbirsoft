<template>
  <h1>a</h1>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    //do something after mounting vue instance
    this.GET_INFO_FOOTBALL();
  },
  methods: {
    ...mapActions(["GET_INFO_FOOTBALL"]),
  },
  computed: {
    ...mapGetters(["football"]),
  },
  name: "Main",
  data: () => {
    return {};
  },
};
</script>

<style></style>
