<template>
  <section>
    <h1>TITLE</h1>
    <div>BODY</div>
    <router-view></router-view>
  </section>
  <section>
    <div>LIKE 10 | DISLIKE 5</div>
  </section>
  <section>
    <div>COMMENTS</div>
  </section>
</template>

<script>
export default {
  name: "Blogs",
};
</script>
