<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1rem;
  font: inherit;
  background-color: #42424242;
  border: 1px solid #42424242;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;

  &:hover,
  &:active {
    background-color: #a2a2a2a2;
    border-color: #a2a2a2a2;
  }
}

.flat {
  background-color: transparent;
  color: #424242;
  border: none;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}

.outline {
  background-color: transparent;
  border-color: #323232;
  color: #323232;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}
</style>