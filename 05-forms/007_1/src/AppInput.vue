<template>
  <div class="form-control" :class="{'invalid':error}">
    <label :for="id">{{ label }}</label>
    <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="change"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    label: String,
    error: String,
    placeholder: String,
    type: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  data: () => ({
    id: 'input' + Math.random().toString(36)
  })
}
</script>

<style lang="scss" scoped>

</style>