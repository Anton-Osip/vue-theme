<template>
  <div class="container">
    <div class="card">
      <h2>Дириктивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>
    </div>
  </div>
</template>

<script>

import {focusDirective} from "@/focusDirectives";

export default {
  directives: {
    focus: focusDirective
  }
}
</script>
<style scoped></style>