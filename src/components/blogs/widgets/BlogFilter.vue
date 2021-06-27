<template>
  <base-card>
    <span>
      <input
        type="text"
        placeholder="Search blogs"
        name="searchbox"
        v-model="searchFilter"
        @input="setFilter"
        class="w-full outline-none"
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
    setFilter(_) {
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