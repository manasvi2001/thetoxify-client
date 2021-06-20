<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>REFRESH</button>
    </div>
    <ul v-if="hasBlogs">
      <li v-for="blog in filteredBlogs" :key="blog.id">
        <router-link :to="`/blogs/${blog.id}`">{{ blog.title }}</router-link>
      </li>
    </ul>
    <h3 v-else>No Blogs Found.</h3>
  </section>
</template>

<script>
export default {
  name: "AllBlogs",
  computed: {
    filteredBlogs() {
      return this.$store.getters["blogs/blogs"];
    },
    hasBlogs() {
      return this.$store.getters["blogs/hasBlogs"];
    },
  },
};
</script>
