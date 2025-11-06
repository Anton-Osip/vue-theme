<template>
  <div class="card card-w70">
    <template v-if="resumeData.length">
      <component
          v-for="resume in resumeData"
          :key="resume.type"
          :is="'resume-' + resume.type"
          v-bind="{value: resume.text}">
      </component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>

</template>

<script>
import ResumeTitle from "@/components/ui/ResumeTitle.vue";
import ResumeSubtitle from "@/components/ui/ResumeSubtitle.vue";
import ResumeText from "@/components/ui/ResumeText.vue";
import ResumeAvatar from "@/components/ui/ResumeAvatar.vue";

export default {
  props: ['resumeData'],
  components: {ResumeAvatar, ResumeTitle, ResumeSubtitle, ResumeText},
}
</script>

<style lang="scss" scoped>

</style>