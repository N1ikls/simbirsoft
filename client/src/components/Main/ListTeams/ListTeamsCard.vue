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
            style="
              font-family: Space Grotesk, sans-serif;
              color: #fff;
              background: linear-gradient(190deg, #00dbd8 0%, #b133ff 100%);
            "
            class="subheading font-weight-bold"
          >
            {{ item.name }}
            <v-spacer></v-spacer>
            <v-img :src="item.crestUrl" max-height="70" max-width="70"></v-img>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ListTeamsCard",
  mounted() {},
  components: {},
  data() {
    return {};
  },

  computed: {},

  methods: {},
  props: {
    props: Object,
    filteredKeys: Array,
    sortBy: String,
  },
};
</script>

<style lang="scss" scoped></style>
