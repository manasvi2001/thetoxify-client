<template>
  <div class="editor">
    <quill-editor
      theme="snow"
      toolbar="full"
      v-model:content="blogContent"
      :options="options"
    />
    <button v-on:click="showText">Print text</button>
  </div>
</template>

<script>
export default {
  name: "CreateBlog",
  data() {
    return {
      blogContent: {},
      options: {
        placeholder: "Topic\nCreate an epic...",
      },
    };
  },
  methods: {
    showText() {
      console.log("Hello");
      console.log(JSON.stringify(this.blogContent));
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  margin: 0 20%;
}
</style>