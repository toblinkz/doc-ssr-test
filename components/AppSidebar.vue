<template>
 <aside
   class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent hidden"
   :class="{ 'block': menu, 'hidden': !menu }"
 >
   <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
     <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">

       <li class="mb-4">
         <p class="mb-2 text-blue-800 uppercase tracking-wider font-bold text-sm lg:text-xs cursor-pointer">Home </p>
         <ul>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="/"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between "
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Introduction
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
               to="authentication">
               Authentication
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink to="error"
             class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >Error</NuxtLink>
           </li>
         </ul>
       </li>
       <li class="mb-4">
         <p class="mb-2 text-blue-800 uppercase tracking-wider font-bold text-sm lg:text-xs cursor-pointer">Inbox </p>
         <ul>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="incoming"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Incoming
             </NuxtLink>
           </li>

         </ul>
       </li>
       <li class="mb-4">
         <p class="mb-2 text-blue-800 uppercase tracking-wider font-bold text-sm lg:text-xs cursor-pointer">Switch </p>
         <ul>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="sender-id"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Sender ID
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="messaging"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Messaging
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="number"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Number
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="templates"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Templates
             </NuxtLink>
           </li>
         </ul>
       </li>
       <li class="mb-4">
         <p class="mb-2 text-blue-800 uppercase tracking-wider font-bold text-sm lg:text-xs cursor-pointer">Token</p>
         <ul>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="send-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Send Token
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="verify-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Verify Token
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="in-app-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               In-App Token
             </NuxtLink>
           </li>
         </ul>
       </li>
       <li class="mb-4">
         <p class="mb-2 text-blue-800 uppercase tracking-wider font-bold text-sm lg:text-xs cursor-pointer">Insights </p>
         <ul>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="events-and-reports"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Events and Reports
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="balance"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Balance
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="search"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Search
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="status"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               Status
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="history"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
               exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
             >
               History
             </NuxtLink>
           </li>



         </ul>
       </li>

     </ul>
   </div>
 </aside>
</template>

<script>
export default {
  name: "AppSidebar",
}
</script>

<style scoped>
a.nuxt-link-active {
  color: #406DAD;
  background-color: #ECF0F7;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
}

</style>
