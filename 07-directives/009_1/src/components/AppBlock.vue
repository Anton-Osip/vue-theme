<template>
  <div class="container">
    <app-alert
        v-if="alert"
        type="primary"
        title="Внимание!"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Alias animi asperiores at cum, "
        @close="toggleAlert"
    />
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert.vue";
import {alertMixin} from "@/alertMixin";

export default {
  mixins: [alertMixin],
  components: {
    AppAlert
  }
}
</script>

