export default {
  currentUser(state) {
    return state.currentUser;
  },
  userId(state) {
    if (!state.currentUser) {
      return null;
    }
    let userId = state.currentUser.id;
    return userId;
  },
  userName(state) {
    if (!state.currentUser) {
      return null;
    }
    let userName = state.currentUser.userName;
    return userName ? userName : "Anonymous";
  },
  photoURL(state) {
    if (!state.currentUser) {
      return null;
    }
    let photoURL = state.currentUser.photoURL;
    return photoURL;
  },
  isLoggedIn(state) {
    return state.currentUser !== null;
  }
};