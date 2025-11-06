<template>
  <div class="container column">
    <component-form @formSubmit="formSubmit"/>
    <component-resume :resumeData="resumeData"/>
  </div>
  <div class="container">
    <p>
      <component-button color="primary" @action="getComments">Загрузить комментарии</component-button>
    </p>
    <component-comments v-if="isHaveComments" :comments="commentsData"/>
    <component-loader v-if="loading"/>
  </div>
</template>

<script>
import Form from './components/form/Form.vue'
import Resume from './components/resume/Resume.vue'
import Comments from './components/comments/Comments.vue'
import Loader from './components/ui/Loader.vue'
import axios from "axios";
import ComponentButton from "@/components/ui/Button.vue";

export default {
  data: () => ({
    resumeData: [],
    commentsData: [],
    loading: false,
  }),

  methods: {
    formSubmit(payload) {
      this.resumeData.push(payload)
    },
    async getComments() {
      this.loading = true
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42.json')
        this.commentsData = response.data
      } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error)
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    isHaveComments() {
      return !this.loading && this.commentsData.length !== 0
    }
  },


  components: {
    ComponentButton,
    ComponentForm: Form, ComponentResume: Resume, ComponentComments: Comments, ComponentLoader: Loader
  },
}
</script>

<style>

</style>
