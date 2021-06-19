import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import CreateBlog from './components/blogs/CreateBlog.vue'
import AllBlogs from './components/blogs/AllBlogs.vue'
import Blog from './components/blogs/Blog.vue'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/createblog',
        component: CreateBlog
    }, {
        path: '/blogs',
        component: AllBlogs
    }, {
        path: '/blogs/:id',
        component: Blog
    }]
})

const app = createApp(App)
app.use(firestorePlugin)
app.use(router)

app.mount('#app')
