<template>
  <section>
    <div
      v-if="isLoggedIn"
      class="mt-4 text-center cursor-pointer"
      @click="googleSignIn"
    >
      Login
    </div>
    <div v-else class="mt-4 text-center cursor-pointer" @click="googleSignOut">
      Logout
    </div>
  </section>
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
import firebase from "firebase";
import BlogItem from "./widgets/BlogItem.vue";
import BlogFilter from "./widgets/BlogFilter.vue";

export default {
  components: { BlogItem, BlogFilter },
  name: "AllBlogs",
  data() {
    return {
      searchFilter: "",
      isLoggedIn: false,
    };
  },
  methods: {
    googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.error(error);
          // ...
        });
    },
    googleSignOut() {
      firebase.auth().signOut();
    },
    setFilter(searchString) {
      this.searchFilter = searchString;
    },
    updateLike(id) {
      this.$store.dispatch("blogs/updateLike", id);
    },
    updateDislike(id) {
      this.$store.dispatch("blogs/updateDislike", id);
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        alert("Yay");
        if (user) {
          this.isLoggedIn = true; // if we have a user
        } else {
          this.isLoggedIn = false; // if we do not
        }
      });
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