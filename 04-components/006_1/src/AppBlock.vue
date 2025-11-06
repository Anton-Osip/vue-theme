<template>
  <div class="card">
    text
    <slot name="header">No text</slot>
    <slot>No text</slot>
    <div v-if="$slots.footer">
      <slot name="footer">No text</slot>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>

</style>