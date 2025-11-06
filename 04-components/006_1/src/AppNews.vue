<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <app-button
        @action="open"
    >
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </app-button>
    <app-button
        v-if="wasRead"
        @action="unmark"
        color="danger"
    >
      Отметить непрочитанной
    </app-button>
    <div
        v-if="isNewsOpen">
      <hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid cum ea eos facilis ipsam iste laudantium
        minus, nemo nisi obcaecati placeat quia quis similique sit
        temporibus totam ullam vero vitae?
      </p>
      <app-button
          v-if="!wasRead"
          @action="mark"
          color="primary"
      >
        Прочесть новость
      </app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>


<script>
import AppButton from "@/AppButton.vue";
import AppNewsList from "@/AppNewsList.vue";

export default {
  props: {
    title: {type: String, required: true},
    wasRead: {type: Boolean, required: true},
    id: {type: Number, required: true},
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    }
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn("Нет параметра айди новости")
      return false
    },
    unmark(id) {
      if (id) {
        return true
      }
      console.warn("Нет параметра айди новости")
      return false
    }
  },

  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }

    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark() {
      this.isNewsOpen = true
      this.$emit('unmark', this.id)
    }
  },
  components: {AppButton, AppNewsList}
}
</script>
