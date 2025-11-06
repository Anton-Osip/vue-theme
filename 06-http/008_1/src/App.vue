<template>
  <div class="container">
    <app-alert
        :alert="alert"
        @close="alert = null"
    >
    </app-alert>
    <form
        class="card"
        @submit.prevent="createPerson"
    >
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input
            type="text"
            id="name"
            v-model.trim="name"/>
      </div>
      <button
          class="btn primary"
          :disabled="name.length===0"
      >Создать юзера
      </button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list
        v-else
        :people="people"
        @load="loadPeople"
        @remove="removePerson"
    ></app-people-list>

  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList.vue'
import AppAlert from './AppAlert.vue'
import AppLoader from './AppLoader.vue'
import axios from 'axios'

export default {
  data: () => ({
    name: '',
    people: [],
    alert: null,
    loading: false,
  }),
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      const response = await fetch('https://user-87f11-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json()

      this.people.push({firstName: this.name, id: firebaseData.name})

      this.name = ''
    },
    async loadPeople() {
      try {
        this.loading = true
        const {data} = await axios.get('https://user-87f11-default-rtdb.firebaseio.com/people.json')
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            firstName: data[key].firstName,
          }
        })
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка',
          text: error.message,
        }
      } finally {
        this.loading = false
      }
    },
    async removePerson(id) {
      try {
        const person = this.people.find(person => person.id === id)
        await axios.delete(`https://user-87f11-default-rtdb.firebaseio.com/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: "успешно",
          text: `Пользователь ${person.firstName} удален`,
        }
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка',
          text: error.message,
        }
      }

    },
  },
  components: {AppPeopleList, AppAlert, AppLoader}
}
</script>

<style>

</style>
