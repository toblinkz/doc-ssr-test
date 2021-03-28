<template>
 <aside
   class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent hidden"
   :class="{ 'block': menu, 'hidden': !menu }"
 >
   <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
     <ul class="p-10 ">
       <li class="mb-4">
         <p class="mb-2 text-black tracking-wider font-bold text-sm lg:text-xs cursor-pointer">
         <NuxtLink
           to="/"
         >
           <i class="entypo-home"></i>Home
         </NuxtLink>
         </p>
       </li>
       <li class="mb-4">
           <p class="mb-2 text-black  tracking-wider font-bold text-sm lg:text-xs cursor-pointer">
             <NuxtLink to="authentication">
               <i class="entypo-home"></i> Authentication
             </NuxtLink>
           </p>
       </li>
       <li class="mb-4">

           <p class="mb-2 text-black  tracking-wider font-bold text-sm lg:text-xs cursor-pointer">
             <NuxtLink to="error">
               <i class="entypo-cancel-circled"></i> Error
             </NuxtLink>
           </p>

       </li>

       <li class="mb-4">
         <p  @click="toggleInboxDropdown" class="mb-2 text-black  tracking-wider font-bold text-sm lg:text-xs cursor-pointer">
           <nuxt-link
             to="inbox"
           >
             <i class="entypo-mail"></i>Inbox
           </nuxt-link>
         </p>


         <ul v-if="show_inbox_dropdown" >
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="incoming"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Incoming
             </NuxtLink>
           </li>

         </ul>
       </li>
       <li class="mb-4">

           <p class="mb-2 text-black  tracking-wider font-bold text-sm lg:text-xs cursor-pointer" @click="toggleSwitchDropdown">
             <nuxt-link to="switch">
               <i class="entypo-list"></i>Switch
             </nuxt-link>
           </p>


         <ul v-if="show_switch_dropdown">
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="sender-id"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Sender ID
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="messaging"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Messaging
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="number"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Number
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="templates"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Templates
             </NuxtLink>
           </li>
         </ul>
       </li>
       <li class="mb-4">
           <p class="mb-2 text-black  tracking-wider font-bold text-sm lg:text-xs cursor-pointer" @click="toggleTokenDropdown">
             <nuxt-link to="token">
               <i class="entypo-light-up"></i>Token
             </nuxt-link>
           </p>
         <ul v-if="show_token_dropdown">
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="send-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Send Token
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="verify-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Verify Token
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="in-app-token"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               In-App Token
             </NuxtLink>
           </li>
         </ul>
       </li>
       <li class="mb-4">

           <p class="mb-2 text-black tracking-wider font-bold text-sm lg:text-xs cursor-pointer" @click="toggleInsightsDropdown">
             <nuxt-link to="insights">
               <i class="icon-graph"></i>Insights
             </nuxt-link>
           </p>

         <ul v-if="show_insights_dropdown">
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="events-and-reports"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Events and Reports
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="balance"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Balance
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="search"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Search
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="status"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Status
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="history"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
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
  data(){
    return{
       show_inbox_dropdown: false,
       show_switch_dropdown:false,
       show_token_dropdown: false,
       show_insights_dropdown: false
    }
  },
  methods:{
    toggleInboxDropdown(){
      this.show_inbox_dropdown = !this.show_inbox_dropdown;
    },
    toggleSwitchDropdown(){
      this.show_switch_dropdown = !this.show_switch_dropdown;
    },
    toggleTokenDropdown(){
      this.show_token_dropdown = !this.show_token_dropdown;
    },
    toggleInsightsDropdown(){
      this.show_insights_dropdown = !this.show_insights_dropdown;
    }
  }
}
</script>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #406DAD;
}
p{
  font-size: 15px !important;
}

</style>

