import { createApp } from 'vue'
// import { firestorePlugin } from 'vuefire'
import router from './router'
import store from './store/index'

import App from './App.vue'
import './index.css'

const app = createApp(App)
// app.use(firestorePlugin)
app.use(router)
app.use(store)

app.mount('#app')
