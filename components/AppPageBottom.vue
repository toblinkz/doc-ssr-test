<template>
  <div class="pt-4 pb-4 lg:px-8 flex flex-col sm:flex-row justify-between">
    <a

      target="_blank"
      rel="noopener"
      class="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center"
    >
      <!--      {{ $t('article.github') }}-->
      <!--      <IconExternalLink class="w-4 h-4 ml-1" />-->
    </a>
    <span class="text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center">
      Updated at, {{ formatDate(document.updatedAt) }}
    </span>
  </div>
</template>

<script>
export default {
 name: "AppPageBottom",
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>

</style>
