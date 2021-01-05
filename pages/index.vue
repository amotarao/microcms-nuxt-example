<template>
  <div>
    <h1>Hello world!</h1>
    <p v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    const posts = await $axios.$get('/posts?fields=id,title', {
      headers: {
        'X-API-KEY': $config.microcms.apiKey,
        'X-GLOBAL-DRAFT-KEY': $config.microcms.globalDraftKey,
      },
    });
    return {
      posts: posts.contents,
    };
  },
};
</script>
