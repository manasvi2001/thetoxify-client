<template>
  <section>
    <input
      type="text"
      placeholder="Title"
      class="w-full p-4 mb-4 text-2xl outline-none font-semibold"
      v-model="title"
    />
  </section>
  <section>
    <quill-editor
      theme="snow"
      toolbar="full"
      v-model:content="blogContent"
      :options="options"
      :class="['h-80', 'text-base']"
    />
  </section>
  <section>
    <base-button mode="flat" :callback="showText">Save as draft</base-button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import util from "./../../util/utility";

export default {
  name: "CreateBlog",
  props: ["isLoggedIn"],
  data() {
    return {
      title: "",
      blogContent: {},
      options: {
        placeholder: "Create an epic...",
      },
      headerLinks: [
        {
          title: "Publish",
          link: false,
          to: "",
          callback: this.publishBlog,
        },
      ],
    };
  },
  emits: ["update-header"],
  methods: {
    showText() {
      console.log(JSON.stringify(this.blogContent));
    },
    publishBlog() {
      if (this.title.trim().length == 0) {
        return;
      }
      let newBlog = {
        userId: this.userId(),
        userName: this.userName(),
        title: this.title,
        content: this.blogContent,
        likes: 0,
        dislikes: 0,
        commentId: "c1",
        published: true,
        timestamp: Date.now(),
        tags: ["anime"],
        id: util.getUniqueBlogId(),
      };
      this.$store.dispatch("blogs/createBlog", newBlog);
      this.$router.push("/blogs");
    },
    ...mapGetters("users", {
      userId: "userId",
      userName: "userName",
    }),
  },
  watch: {
    isLoggedIn(value) {
      if (value) {
        this.$emit("update-header", this.headerLinks);
      }
    },
  },
  created() {
    if (this.isLoggedIn) {
      this.$emit("update-header", this.headerLinks);
    }
  },
};
</script>