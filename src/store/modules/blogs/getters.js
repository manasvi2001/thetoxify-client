export default {
    blogs(state) {
        return state.blogs;
    },
    selectedBlog(state) {
        return state.selectedBlog;
    },
    hasBlogs(state) {
        return state.blogs && state.blogs.length > 0;
    },
};