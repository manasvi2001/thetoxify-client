<template>
  <section class="text-center">
    <base-header title="TheToxify" :navItems="navItems"></base-header>
  </section>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      isLoggedIn: false,
      navItems: [
        {
          title: "Login",
          link: false,
          to: "",
          callback: this.googleSignIn,
        },
      ],
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true; // if we have a user
        this.navItems = [
          {
            title: "Create Blog",
            link: true,
            to: "/createBlog",
            callback: null,
          },
          {
            title: "Logout",
            link: false,
            to: "",
            callback: this.googleSignOut,
          },
        ];
      } else {
        this.isLoggedIn = false; // if we do not
        this.navItems = [
          {
            title: "Login",
            link: false,
            to: "",
            callback: this.googleSignIn,
          },
        ];
      }
    });
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
  },
};
</script>