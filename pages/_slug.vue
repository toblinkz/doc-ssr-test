<template>
  <div class="flex flex-wrap-reverse bg-color" >
    <div class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:w-3/4">
        <article class="prose dark:prose-dark max-w-none lg:px-8">
          <h1 class="flex items-center justify-between">
                      {{ document.title }}
          </h1>
          <NuxtContent :document="document" />
        </article>
       <AppPageBottom :document="document" />
      <AppPrevNext :prev="prev" :next="next"/>
    </div>
    <AppToc v-if="!document.fullscreen" :toc="document.toc" />
    <SubmitSdkModal></SubmitSdkModal>
    <SuccessfullySubmittedSdkModal></SuccessfullySubmittedSdkModal>
  </div>
</template>

<script>
import Vue from "vue";
import AppCopyButton from "@/components/AppCopyButton";
import SubmitSdkModal from "@/components/modals/SubmitSdkModal";
import SuccessfullySubmittedSdkModal from "@/components/modals/SuccessfullySubmittedSdkModal";

export default {
  components:{SubmitSdkModal, SuccessfullySubmittedSdkModal},
  mounted () {
    setTimeout(() => {
      const blocks = document.getElementsByClassName('nuxt-content-highlight')
      for (const block of blocks) {
        const CopyButton = Vue.extend(AppCopyButton)
        const component = new CopyButton().$mount()
        block.appendChild(component.$el)
      }
    }, 100)
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const document = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const [prev, next] = await $content('/', { deep: true })
      .only(['title', 'path', 'to'])
      .sortBy('position', 'asc')
      .surround(params.slug, { before: 1, after: 1 })
      .fetch()
    return {
      document,
      prev,
      next
    };
  }
};
</script>

