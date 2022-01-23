export default {
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
