export default {
  fetchBlogs(state, payload) {
    if (payload) {
      state.blogs = [...payload];
    } else {
      state.blogs = [];
    }
  },
  setSelectedBlog(state, payload) {
    state.selectedBlog = payload;
  },
  setSelectedBlog(state, payload) {
    state.selectedBlog = payload;
  },
  createBlog(state, payload) {
    state.blogs = [
      ...state.blogs,
      payload
    ];
  },
  updateLike(state, payload) {
    const index = state.blogs.findIndex(blog => blog.id == payload.id);
    state.blogs = [
      ...state.blogs.slice(0, index),
      {
        ...state.blogs[index],
        likes: state.blogs[index].likes + 1,
      },
      ...state.blogs.slice(index + 1),
    ];
  },
  updateDislike(state, payload) {
    const index = state.blogs.findIndex(blog => blog.id == payload.id);
    state.blogs = [
      ...state.blogs.slice(0, index),
      {
        ...state.blogs[index],
        dislikes: state.blogs[index].dislikes + 1,
      },
      ...state.blogs.slice(index + 1),
    ];
  },
};