<template>
  <span class="badge">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ["title"],
  computed: {
    text() {
      return this.title.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  font-size: 0.9rem;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>