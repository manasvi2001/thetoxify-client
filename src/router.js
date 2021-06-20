import { createRouter, createWebHistory } from 'vue-router'

import CreateBlog from './components/blogs/CreateBlog.vue'
import AllBlogs from './components/blogs/AllBlogs.vue'
import Blog from './components/blogs/Blog.vue'
import UpdateBlog from './components/blogs/UpdateBlog.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/blogs'
    }, {
        path: '/createblog',
        component: CreateBlog
    }, {
        path: '/blogs',
        component: AllBlogs
    }, {
        path: '/blogs/:id',
        component: Blog,
        children: [{
            path: 'edit',
            component: UpdateBlog
        }]
    }, {
        path: '/:notFound(.*)',
        component: NotFound
    }]
})

export default router;