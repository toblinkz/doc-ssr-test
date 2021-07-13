<template>
 <aside
   class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent"
   :class="{ 'block': menu, 'hidden': !menu }"
 >
   <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
     <ul class="p-10 ">
       <li class="mb-4">
         <p class="mb-2 text-gray-700 font-semibold tracking-wider  text-sm lg:text-xs cursor-pointer" @click="toggleHomeDropdown">
         <NuxtLink
           to="/"
         >
           <i class="entypo-home mr-2"></i>Home
         </NuxtLink>
         </p>
         <ul v-if="show_home_dropdown">
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="authentication"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Authentication
             </NuxtLink>
           </li>
           <li class="text-gray-700 dark:text-gray-300">
             <NuxtLink
               to="error"
               class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
             >
               Error
             </NuxtLink>
           </li>
         </ul>
       </li>

       <li class="mb-4">

           <p class="mb-2 text-gray-700 tracking-wider font-semibold text-sm lg:text-xs cursor-pointer" @click="toggleSwitchDropdown">
             <nuxt-link to="switch">
               <i class="entypo-switch mr-2"></i>Switch
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
           <p class="mb-2 text-gray-700 tracking-wider font-semibold text-sm lg:text-xs cursor-pointer" @click="toggleTokenDropdown">
             <nuxt-link to="token">
               <i class="entypo-link mr-2"></i>Token
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

           <p class="mb-2 text-gray-700 tracking-wider font-semibold text-sm lg:text-xs cursor-pointer" @click="toggleInsightsDropdown">
             <nuxt-link to="insights">
               <i class="entypo-chart-line mr-2"></i>Insights
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
       <li class="mb-4">
         <p  @click="toggleInboxDropdown" class="mb-2 text-gray-700 font-semibold tracking-wider text-sm lg:text-xs cursor-pointer">
           <nuxt-link
             to="inbox"
           >
             <i class="entypo-chat mr-2"></i>Inbox
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
         <p class="mb-2 text-gray-700 font-semibold tracking-wider text-sm lg:text-xs cursor-pointer">
           <nuxt-link
             to="libraries-and-plugins"
           >
             <i class="icon-books mr-2"></i>Libraries and Plugins
           </nuxt-link>
         </p>
       </li>
       <li class="mb-4">
         <p class="mb-2 text-gray-700 font-semibold tracking-wider text-sm lg:text-xs cursor-pointer">
           <a
             target="_blank"
             href="https://join.slack.com/t/termii-loop/shared_invite/zt-imbqlf68-w4lsPkOzibBXSQohu8_8dQ"
           >
             <i class="fa fa-slack mr-2"></i>Join Termii Loop
           </a>
         </p>
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
       show_home_dropdown: true,
       show_inbox_dropdown: false,
       show_switch_dropdown:false,
       show_token_dropdown: false,
       show_insights_dropdown: false
    }
  },
  computed:{
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    },
  },
  methods:{
    toggleHomeDropdown(){
      this.show_home_dropdown = !this.show_home_dropdown;
    },
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

