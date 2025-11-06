<template>
  <div class="container pt-1">
    <div class="card">

      <app-async-component></app-async-component>

      <h2>Tabs</h2>
      <app-button
          :color="active === 'one' ?'primary':'secondary'"
          @action="active = 'one'"
      >
        one
      </app-button>
      <app-button
          :color="active === 'two' ?'primary':'secondary'"
          @action="active = 'two'"
      >
        two
      </app-button>
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>


    </div>

    <!--    <app-text-one v-if="active==='one'"></app-text-one>-->
    <!--    <app-text-two v-else-if="active==='two'"></app-text-two>-->

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import AppButton from "@/AppButton.vue";
import AppTextOne from "@/AppTextOne.vue";
import AppTextTwo from "@/AppTextTwo.vue";

const AppAsyncComponent = defineAsyncComponent(() => import('@/AppAsyncComponent.vue'));

export default {

  data() {
    return {
      active: 'one'
    }
  },
  computed: {
    componentName() {
      return `app-text-${this.active}`;
    }
  },
  components: {AppAsyncComponent, AppButton, AppTextOne, AppTextTwo},
}
</script>

<style scoped>

</style>
