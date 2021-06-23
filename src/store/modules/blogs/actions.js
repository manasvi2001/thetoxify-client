export default {
  updateLike(context, id) {
    // Do the server side call for updating likes
    const payload = {
      id
    };
    context.commit('updateLike', payload);
  },
  updateDislike(context, id) {
    // Do the server side call for updating dislikes
    const payload = {
      id
    };
    context.commit('updateDislike', payload);
  },
};