<template>
  <section>
    <base-card>
      <h1>{{ title }}</h1>
      <h3>{{ author }} {{ timestamp }}</h3>
      <div class="bottom-padding">
        <quill-editor
          theme="bubble"
          readOnly
          contentType="text"
          :content="content"
        />
      </div>
      <div>LIKES {{ likes }} | DISLIKE {{ dislikes }}</div>
      <base-badge v-for="tag in tags" :key="tag" :title="tag"></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <div>{{ comment }}</div>
    </base-card>
  </section>
</template>

<script>
export default {
  name: "Blogs",
  props: ["id"],
  data() {
    return {
      selectedBlog: null,
    };
  },
  computed: {
    title() {
      return this.selectedBlog.title;
    },
    author() {
      return this.selectedBlog.userId;
    },
    timestamp() {
      return this.selectedBlog.timestamp;
    },
    tags() {
      return this.selectedBlog.tags;
    },
    content() {
      return this.selectedBlog.content;
    },
    likes() {
      return this.selectedBlog.likes;
    },
    dislikes() {
      return this.selectedBlog.dislikes;
    },
    comment() {
      return this.selectedBlog.commentId;
    },
  },
  created() {
    this.selectedBlog = this.$store.getters["blogs/blogs"].find(
      (blog) => blog.id == this.id
    );
  },
};
</script>

<style lang="scss">
.ql-editor {
  font-family: Avenir;
}

.bottom-padding {
  margin-bottom: 2rem;
}
</style>