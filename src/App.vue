<template>
  <div>
    <nav>
      <h1>Welcome to TheToxify</h1>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import CreateBlog from './components/blogs/CreateBlog.vue'

export default {
  name: 'App'
}
</script>
