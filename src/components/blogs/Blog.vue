<template>
  <section>
    <base-card>
      <div class="p-4">
        <h1 class="text-2xl font-semibold">{{ title }}</h1>
        <h3 class="text-sm">By: {{ author }} | Posted on: {{ timestamp }}</h3>
      </div>
      <div class="bottom-padding">
        <quill-editor
          theme="bubble"
          readOnly
          :content="content"
          :class="['text-base']"
        />
      </div>
      <!-- <div>LIKES {{ likes }} | DISLIKE {{ dislikes }}</div> -->
      <div class="p-4">
        <base-badge v-for="tag in tags" :key="tag" :title="tag"></base-badge>
      </div>
    </base-card>
  </section>
  <!-- <section>
    <base-card>
      <div>{{ comment }}</div>
    </base-card>
  </section> -->
</template>

<script>
import moment from "moment";

export default {
  name: "Blogs",
  props: ["id", "isLoggedIn"],
  emits: ["update-header"],
  data() {
    return {
      selectedBlog: null,
      headerLinks: [
        {
          title: "All Blogs",
          link: true,
          to: "/blogs",
          callback: null,
        },
        {
          title: "Create Blog",
          link: true,
          to: "/createBlog",
          callback: null,
        },
      ],
    };
  },
  computed: {
    title() {
      return this.selectedBlog.title;
    },
    author() {
      return this.selectedBlog.userName;
    },
    timestamp() {
      return moment(this.selectedBlog.timestamp).format("DD-MMM-YYYY");
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
  watch: {
    isLoggedIn(value) {
      if (value) {
        this.$emit("update-header", this.headerLinks);
      }
    },
  },
  created() {
    this.selectedBlog = this.$store.getters["blogs/blogs"].find(
      (blog) => blog.id == this.id
    );
    if (this.isLoggedIn) {
      this.$emit("update-header", this.headerLinks);
    }
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