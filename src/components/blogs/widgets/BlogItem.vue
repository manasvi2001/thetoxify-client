<template>
  <li>
    <div class="media">
      <div class="media-left mx-0">
        <div class="columns my-0 min-width-100">
          <div class="column rows py-0 centered-text">
            <div class="mt-0 c-pointer" @click="updateLike">
              <font-awesome-icon icon="chevron-up" />
            </div>
            <div>
              <strong class="has-text-info">{{ totalLikes }}</strong>
            </div>
            <div class="mb-0 c-pointer" @click="updateDislike">
              <font-awesome-icon icon="chevron-down" />
            </div>
          </div>
        </div>
      </div>
      <div class="media-content">
        <div class="content">
          <router-link :to="blogLink">
            <h3>{{ title }}</h3>
            <h4>By: {{ author }}</h4>
            <div>
              <base-badge
                v-for="tag in tags"
                :key="tag"
                :title="tag"
              ></base-badge>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["likes", "dislikes", "title", "tags", "id", "userId"],
  data() {
    return {
      author: "",
    };
  },
  emits: ["liked", "disliked"],
  methods: {
    updateLike(event) {
      this.$emit("liked", this.id);
    },
    updateDislike(event) {
      this.$emit("disliked", this.id);
    },
  },
  computed: {
    blogLink() {
      return `/blogs/${this.id}`;
    },
    totalLikes() {
      const suffixes = ["", "k", "M", "B", "T"];
      let totalLikes = this.likes - this.dislikes;
      let suffixIndex = 0;
      while (Math.abs(totalLikes) >= 1000) {
        totalLikes = totalLikes / 1000;
        suffixIndex += 1;
      }
      let likesText = `${
        suffixIndex === 0 ? totalLikes : totalLikes.toFixed(1)
      }${suffixes[suffixIndex]}`;
      return likesText;
    },
  },
  created() {
    this.author = this.userId;
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #42424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 2rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: initial;
}

.centered-text {
  text-align: center;
}

.c-pointer {
  cursor: pointer;
}

.min-width-100 {
  min-width: 100px;
}
</style>