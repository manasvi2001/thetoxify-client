import { createStore } from 'vuex'
import blogModule from './modules/blogs/index'
import userModule from './modules/users/index'
import commentModule from './modules/comments/index'

const store = createStore({
    modules: {
        blogs: blogModule,
        users: userModule,
        comments: commentModule
    }
})

export default store