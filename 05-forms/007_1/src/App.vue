<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>

      <app-input
          v-model.trim="name"
          :error="errors.name"
          label="Как тебя зовут?"
          placeholder="Введи имя"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            value="20"
            v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="Vuex" name="skills"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="CLI" name="skills"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="Router" name="skills"/> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "@/AppInput.vue";

export default {
  components: {AppInput},
  data: () => ({
    name: '',
    age: 23,
    city: 'nsk',
    relocate: null,
    skills: [],
    errors: {
      name: null
    }
  }),
  methods: {
    formIsValid() {
      let isValid = true

      if (this.name.length === 0) {
        isValid = false
        this.errors.name = 'name is required'
      } else {
        this.errors.name = null
      }

      return isValid
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.group('form data')
        console.log('name', this.name)
        console.log('age', this.age)
        console.log('city', this.city)
        console.log('relocate', this.relocate)
        console.log('skills', this.skills)
        console.groupEnd()
      }
    }
  },
  computed: {AppInput}
}
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border: 1px solid red;

}
</style>
