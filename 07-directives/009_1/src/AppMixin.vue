<template>
  <div class="container">
    <app-alert
        v-if="alert"
        type="warning"
        title="Внимание!"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Alias animi asperiores at cum, "
        closable
        @close="toggleAlert"
    />
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>

    <app-block/>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert.vue";
import AppBlock from "@/components/AppBlock.vue";
import {alertMixin} from "@/alertMixin";

export default {
  mixins: [alertMixin],
  components: {
    AppAlert, AppBlock
  }
}
</script>


