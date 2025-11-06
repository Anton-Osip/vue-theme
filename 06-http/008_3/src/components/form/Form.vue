<template>
  <form class="card card-w30" @submit.prevent="formSubmitHandler">
    <component-select
        label="Тип блока"
        id="type"
        :options="selectData"
        v-model="type"
    />

    <component-text-area
        id="value"
        label="Значение"
        v-model="text"
    />

    <component-button color="primary" type="submit" :disabled="isDisabledButton">Добавить</component-button>
  </form>
</template>

<script>
import Select from "@/components/ui/Select.vue";
import TextArea from "@/components/ui/TextArea.vue";
import Button from "@/components/ui/Button.vue";

export default {
  emits: ["formSubmit"],
  data: () => ({
    selectData: [{value: 'title', title: 'Заголовок'},
      {value: 'subtitle', title: 'Подзаголовок'},
      {value: 'avatar', title: 'Аватар'},
      {value: 'text', title: 'Текст'},
    ],
    type: 'title',
    text: '',
  }),
  methods: {
    formSubmitHandler() {
      this.$emit('formSubmit', {type: this.type, text: this.text});
      this.type = 'title'
      this.text = ''
    }
  },
  computed: {
    isDisabledButton() {
      return this.text.trim().length < 3
    }
  },
  components: {ComponentSelect: Select, ComponentTextArea: TextArea, ComponentButton: Button},
}
</script>

<style scoped>

</style>