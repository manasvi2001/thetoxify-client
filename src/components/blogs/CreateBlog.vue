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
      let newBlog = {
        userId: "u1",
        userName: "abc",
        title: this.title,
        content: this.blogContent,
        likes: 0,
        dislikes: 0,
        commentId: "c1",
        published: true,
        timestamp: Date.now(),
        tags: ["anime"],
      };
      this.$store.dispatch("blogs/createBlog", newBlog);
      this.$router.push("/blogs");
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
    if (this.isLoggedIn) {
      this.$emit("update-header", this.headerLinks);
    }
  },
};
</script>