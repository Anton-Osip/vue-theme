<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>

    </div>

    <app-list>
      <template #default="slotProps">
        <span style="color:red;">
          <strong>{{ slotProps.idx + 1}}</strong>
          {{slotProps.iter}}</span>
      </template>

    </app-list>


    <app-block>
      <!--      <template #footer>-->
      <!--        <h3>footer</h3>-->
      <!--      </template>-->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
        Aliquam amet aspernatur assumenda cumque debitis
        deleniti dolorem, earum, eius est et illum ipsam
        iste labore libero maiores nemo quis saepe tenetur?
      </p>
      <template #header>
        <h3>header</h3>
      </template>


    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue'
import AppList from './AppList.vue'

export default {
  components: {AppBlock, AppList},
}
</script>

<style scoped>

</style>
