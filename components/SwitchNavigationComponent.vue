<template>
  <div>
    <div class="flex">
      <nuxt-link to="/sender-id" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer ">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/sender_id.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center  font-medium font-bold text-base text-blue-700 mb-4">Sender ID API<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Request new Sender IDs and retrieve their status.
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/messaging" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/messaging.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Messaging API<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
           Send messages to customers across our messaging channels.
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/number" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/number.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Number API<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Send messages to customers using auto-generated messaging numbers.
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/templates" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/templates.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Templates API<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Request and Send template messages across different messaging channels.
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="flex mt-5">
      <nuxt-link to="/phonebook" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer">
        <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/campaigns.svg')"></div>
        <div class="mx-6 my-4 ">
          <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-4">Campaign API<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
          <p class="font-normal text-gray-dark text-sm mb-2">
            Send and manage campaigns sent to your phonebook.
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
name: "SwitchNavigationComponent"
}
</script>

<style scoped>

</style>
