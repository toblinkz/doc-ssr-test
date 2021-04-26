<template>
  <div>
    <div class="flex">
      <nuxt-link to="/switch" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer ">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/switch.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center  font-medium font-bold text-base text-blue-700 mb-4">Switch<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Deliver messages efficiently.
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/token" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/token.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Token<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Secure transactions for users.
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/insights" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/insights.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Insights<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Retrieve real-time reports
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/error" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/error.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Errors<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Error responses and codes
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "QuickNavigationCard",
}
</script>

<style scoped>

</style>
