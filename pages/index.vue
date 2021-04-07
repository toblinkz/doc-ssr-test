<template>
  <div class="flex flex-wrap-reverse" >
    <div class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:w-3/4">
      <article class="prose dark:prose-dark max-w-none lg:px-8">
        <h1 class="flex items-center justify-between">
          {{ document.title }}
        </h1>
        <NuxtContent :document="document" />
      </article>
      <AppPageBottom :document="document" />
      <AppPrevNext prev="" :next="next"/>
    </div>
    <AppToc v-if="!document.fullscreen" :toc="document.toc" />
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      next:{
         title: 'Authentication',
          slug: 'authentication'
        }
    }
  },

  async asyncData({ $content, params, error }) {
    const document = await $content("index")
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });


    return {
      document,
    };
  }
}
</script>

<style scoped>

</style>

