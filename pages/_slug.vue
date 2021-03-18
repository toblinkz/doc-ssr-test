<template>
  <div class="flex flex-wrap-reverse" >
    <div class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:w-3/4 lg:border-l lg:border-r">
        <article class="prose dark:prose-dark max-w-none lg:px-8">
          <h1 class="flex items-center justify-between">
                      {{ document.title }}
          </h1>
          <NuxtContent :document="document" />
        </article>
       <AppPageBottom :document="document" />
<!--      <AppPrevNext :prev="prev" :next="next" />-->
    </div>
    <AppToc v-if="!document.fullscreen" :toc="document.toc" />
  </div>
</template>

<script>
export default {
  name: "documentation-slug",
  async asyncData({ $content, params }) {
    const document = await $content('documentation', params.slug).fetch();

    // const [prev, next] = await $content('documentation', { deep: true })
    //   .only(['title', 'slug'])
    //   .sortBy('position', 'asc')
    //   .surround(params.slug)
    //   .fetch()

    return {
      document,
      // prev,
      // next
    }
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  }
}
</script>

<style scoped>

</style>
