<template>
  <button :type="type" class="btn" :class="color" @click="handleClick" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    disabled: {type: Boolean, default: false},
    type: {type: String, default: 'button'},
    color: {
      type: String, default: '', validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  methods: {
    handleClick() {
      if (this.type !== 'submit') {
        this.$emit('action');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
