<template>
  <section>
    <blog-filter @change-filter="setFilter"></blog-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">REFRESH</base-button>
      </div>
      <ul v-if="hasBlogs">
        <blog-item
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :likes="blog.likes"
          :dislikes="blog.dislikes"
          :title="blog.title"
          :tags="blog.tags"
          :id="blog.id"
          :userId="blog.userId"
          @liked="updateLike"
          @disliked="updateDislike"
        ></blog-item>
      </ul>
      <h3 v-else>No Blogs Found.</h3>
    </base-card>
  </section>
</template>

<script>
import BlogItem from "./widgets/BlogItem.vue";
import BlogFilter from "./widgets/BlogFilter.vue";

export default {
  components: { BlogItem, BlogFilter },
  name: "AllBlogs",
  data() {
    return {
      searchFilter: "",
    };
  },
  methods: {
    setFilter(searchString) {
      this.searchFilter = searchString;
    },
    updateLike(id) {
      this.$store.dispatch("blogs/updateLike", id);
    },
    updateDislike(id) {
      this.$store.dispatch("blogs/updateDislike", id);
    },
  },
  computed: {
    filteredBlogs() {
      return this.$store.getters["blogs/blogs"]
        .filter((blog) => blog.published)
        .filter((blog) => blog.title.includes(this.searchFilter));
    },
    hasBlogs() {
      return this.$store.getters["blogs/hasBlogs"];
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>