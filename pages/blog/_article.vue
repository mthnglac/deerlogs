<template>
  <div>
    <div>
      <div v-if="showFilteredArticle">
        <h2>we are in article named: {{ showFilteredArticle.slug }}</h2>
      </div>
      <div v-else>
        <h2>Malesef makale yok</h2>
      </div>
    </div>
    <div>
      <div v-if="showFilteredArticle.comment">
        <div v-for="(comment, i) in showFilteredArticle.comment" :key="i">
          <ul>
            <li>{{ comment.author.username }}</li>
            <li>{{ comment.author.email }}</li>
            <li>
              {{ comment.content }}
              <div v-if="comment.reply.length">
                <ul v-for="(reply, x) in comment.reply" :key="x">
                  <li>{{ reply.author.username }}</li>
                  <li>{{ reply.author.email }}</li>
                  <li>{{ reply.content }}</li>
                </ul>
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div v-else>
        Henuz bir yorum bulunmamaktadir.
      </div>
    </div>
    <NuxtLink to="/blog">
      Geri don
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Article',
  computed: {
    showFilteredArticle() {
      return this.$store.getters['blog/getArticles'].find(
        (v) => v.slug === this.$route.params.article
      )
    }
  }
}
</script>
