<template>
  <div
    v-if="prev || next"
    class="flex  lg:px-8 pt-4  dark:border-gray-800"

  >

    <NuxtLink
      v-if="prev"
      :to="{ name: 'slug', params: { slug: prev.slug } }"
      class="prev-next-button p-2 rounded  flex items-center"
    >

      <IconArrowLeft class="w-4 h-4 mr-1 flex-shrink-0"/>
      <span class="truncate">{{ prev.title }}</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>


    <NuxtLink
      v-if="next"
      :to="{ name: 'slug', params: { slug: next.slug } }"
      class="prev-next-button  p-2 rounded  flex items-center ml-auto"
    >
      <span class="truncate">{{ next.title }}</span>
      <IconArrowRight  class="w-4 h-4 ml-1 flex-shrink-0"/>
    </NuxtLink>
    <span v-else>&nbsp;</span>

  </div>
</template>

<script>
export default {
name: "AppPrevNext",
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
}
</script>

<style scoped>
.prev-next-button {
  border: 1px solid #000;
  border-radius: 3px;
  color: #000;
}
.prev-next-button:hover{
  background: linear-gradient(-48deg, #0DCBE5 -30%, #365899 60%);
  border: none;
  color: #ffffff;
}
</style>
