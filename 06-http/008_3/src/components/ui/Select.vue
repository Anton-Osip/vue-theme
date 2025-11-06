<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue" @change="change">
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.title }}</option>
    </select>
  </div>
</template>

<script>


export default {
  emits: ['update:modelValue'],
  props: ['id', 'label', 'options', 'modelValue'],
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>