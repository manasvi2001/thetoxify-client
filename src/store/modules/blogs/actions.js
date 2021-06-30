export default {
  async fetchBlogs(context) {
    let response = await fetch(`https://thetoxify-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json`);
    if (!response.ok) {

    }
    let payload = await response.json();
    let blogs = [];
    if (payload) {
      blogs = Object.values(payload);
    }
    context.commit('fetchBlogs', blogs);
  },
  async fetchBlog(context, blogId) {
    let selectedBlog = context.state.blogs.find(
      (blog) => blog.id == blogId
    );
    if (!selectedBlog) {
      let response = await fetch(`https://thetoxify-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/${blogId}.json`);
      if (!response.ok) {

      }
      selectedBlog = await response.json();
    }
    context.commit("setSelectedBlog", selectedBlog);
  },
  async createBlog(context, payload) {
    let response = await fetch(`https://thetoxify-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/${payload.id}.json`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
    if (!response.ok) {

    }
    context.commit('createBlog', payload);
  },
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