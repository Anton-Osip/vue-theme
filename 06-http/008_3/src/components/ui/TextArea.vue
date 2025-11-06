<template>
  <div class="form-control">
    <label :for="id">{{label}}</label>
    <textarea
        :id="id"
        rows="3"
        :value="modelValue"
        @input="change"
    ></textarea>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: ['id', 'label', 'modelValue'],
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>