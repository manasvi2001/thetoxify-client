<template>
  <div class="editor">
    <quill-editor
      theme="snow"
      toolbar="full"
      v-model:content="blogContent"
      :options="options"
      :modules="modules"
    />
    <button v-on:click="showText">Print text</button>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

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
  setup() {
    const modules = {
      name: "blotFormatter",
      module: BlotFormatter,
      options: {
        /* options */
      },
    };
    return { modules };
  },
  methods: {
    showText() {
      console.log("Hello");
      console.log(JSON.stringify(this.blogContent));
    },
  },
  components: {
    QuillEditor,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  margin: 0 20%;
}
</style>