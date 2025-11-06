<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Actual news: {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано {{ readRate }}</span>
    </div>

    <app-news
        v-for="item in news"
        @open-news="openNews"
        @read-news="readNews"
        @unmark="unmark"
        :title="item.title"
        :id="item.id"
        :wasRead="item.wasRead"
        :isOpen="item.isOpen"
        :key="item.id"
    >
    </app-news>
  </div>
</template>

<script>

import AppNews from "@/AppNews.vue";

export default {
  data: () => ({
    now: new Date().toLocaleDateString(),
    isOpen: false,
    openRate: 0,
    readRate: 0,
    news: [
      {id: 1, title: 'news1', isOpen: false, wasRead: false},
      {id: 2, title: 'news2', isOpen: false, wasRead: false},
      {id: 3, title: 'news3', isOpen: false, wasRead: false}]
  }),
  components: {
    "app-news": AppNews
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const currentNews = this.news.findIndex(i => i.id === id)
      this.news[currentNews].wasRead = true
      this.readRate++
    },
    unmark(id) {
      const currentNews = this.news.findIndex(i => i.id === id)
      this.news[currentNews].wasRead = false
      this.readRate--
    }
  },
  provide() {
    return {
      news: this.news,
    }
  }
}
</script>

<style scoped>
  h2{
    color: red;
  }
</style>
