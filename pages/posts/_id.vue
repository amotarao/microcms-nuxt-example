<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <p><NuxtLink to="/">トップに戻る</NuxtLink></p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const post = await $axios.$get(`/posts/${params.id}?fields=title,body`, {
      headers: {
        'X-API-KEY': $config.microcms.apiKey,
        'X-GLOBAL-DRAFT-KEY': $config.microcms.globalDraftKey,
      },
    });
    return post;
  },
};
</script>
