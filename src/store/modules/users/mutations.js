export default {
  saveUser(state, payload) {
    state.currentUser = payload;
  },
  deleteUser(state) {
    state.currentUser = null;
  },
};