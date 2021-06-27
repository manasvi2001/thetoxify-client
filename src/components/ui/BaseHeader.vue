<template>
  <div class="flex flex-row justify-between items-center mb-5">
    <div class="text-4xl font-medium">
      <router-link to="/">{{ title }}</router-link>
    </div>
    <div v-if="showNavBar" class="flex-none">
      <base-button
        v-for="navItem in navItems"
        :key="navItem.title"
        mode="flat"
        :to="navItem.to"
        :link="navItem.link"
        :callback="navItem.callback"
      >
        {{ navItem.title }}
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    navItems: {
      type: Array,
      default: [],
      required: false,
    },
  },
  computed: {
    showNavBar() {
      return this.navItems.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>