<template>
  <div class="card my-2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 72rem;
}
</style>