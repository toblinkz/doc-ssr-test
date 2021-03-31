<template>
  <div v-if="toc.length" class="w-full lg:w-1/4 block relative">
    <div class="fixed overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
      <nav class="py-4 lg:py-8 lg:pl-8 lg:pr-2">
        <p class="mb-3 lg:mb-2 text-black uppercase tracking-wider font-bold text-sm lg:text-xs">ON THIS PAGE</p>
        <scrollactive highlight-first-item active-class="text-primary-500" :offset="0" tag="ul">
          <li
            v-for="link of toc"
            :key="link.id"
            class="text-gray-700 dark:text-gray-300"
            :class="{
              ' dark:border-gray-800 first:border-t-0': link.depth === 2
            }"
          >
            <a
              :href="`#${link.id}`"
              class="block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pr-1 hover:text-blue-800"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3,
                'ml-3 pb-2': link.depth === 4,
                'ml-4 pb-2': link.depth === 5,
                'ml-5 pb-2': link.depth === 6
              }"
            >{{ link.text }}</a>
          </li>
        </scrollactive>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppToc",
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>

</style>
