<template>
  <div>
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
            <v-btn class="btn" @click.prevent="getApi(item.id)"
              >Список команд
            </v-btn>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <template v-if="this.errorTeams">
      <ListLeaguesCardError :dialog="this.errorTeams" />
    </template>
  </div>
</template>
<script>
import ListLeaguesCardError from "./ListleaguesCardError.vue";
import { mapGetters } from "vuex";
export default {
  name: "ListLeaguesCard",
  mounted() {},
  components: {
    ListLeaguesCardError,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["errorTeams", "isTeams", "teams"]),
    getIsTeams() {
      return this.isTeams;
    },
  },
  watch: {
    isTeams() {
      this.routerPush();
    },
  },
  methods: {
    routerPush() {
      if (this.isTeams) {
        this.$router.push("/teams").catch(() => {});
      }
    },
  },
  props: {
    props: Object,
    filteredKeys: Array,
    getApi: Function,
    sortBy: String,
  },
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
