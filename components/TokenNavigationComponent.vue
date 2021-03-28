<template>
  <div>
    <div class="flex">
      <nuxt-link to="/send-token" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer ">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/switch.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center  font-medium font-bold text-base text-blue-700 mb-4">Send Token<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/verify-token" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/token.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Verify Token<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/in-app-token" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/insights.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">In-App Token<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TokenNavigationComponent"
}
</script>

<style scoped>

</style>
