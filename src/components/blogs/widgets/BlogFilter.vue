<template>
  <base-card>
    <h2>Find Blogs</h2>
    <span>
      <input
        type="text"
        placeholder="Search keywords"
        name="searchbox"
        v-model.lazy="searchFilter"
        @input="setFilter"
      />
    </span>
  </base-card>
</template>

<script>
export default {
  name: "BlogFilter",
  data() {
    return {
      searchFilter: "",
    };
  },
  emits: ["change-filter"],
  methods: {
    setFilter(event) {
      this.$emit("change-filter", this.searchFilter);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
}
</style>