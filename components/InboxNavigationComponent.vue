<template>
 <div>
   <div class="flex">
     <nuxt-link to="/incoming" class="w-1/2 no-underline rounded-sm rounded-md rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer ">
       <div class="h-20 bg-cover hover:bg-gray" style="background-image: url('/incoming.svg')"></div>
       <div class="mx-6 my-4 ">
         <div class="flex items-center  font-medium font-bold text-base text-blue-700 mb-4">Incoming<icon-arrow-right class="w-4 h-4 ml-1 flex-shrink-0"/></div>
         <p class="font-normal text-gray-dark text-sm mb-2">
           Receive inbound messages directly in your application.
         </p>
       </div>
     </nuxt-link>
   </div>
 </div>
</template>

<script>
export default {
name: "InboxNavigationComponent"
}
</script>

<style scoped>

</style>
