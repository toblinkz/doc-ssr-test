<template>
  <div>
    <div class="flex">
      <nuxt-link to="/events-and-reports" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer ">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/switch.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center  font-medium font-bold text-base text-blue-700 mb-4">Events and Reports<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Receive events on your webhook url
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/balance" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/token.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Balance<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Retrieve your wallet balance via API
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/search" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/insights.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Search<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            The search API verifies and detects s phone number's DND status
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/status" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/insights.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Status<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            The status API detects fake or ported phone numbers
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/history" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-40 bg-cover hover:bg-gray" style="background-image: url('/insights.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">History<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Fetch your Message History
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
name: "InsightNavigationComponent"
}
</script>

<style scoped>

</style>
