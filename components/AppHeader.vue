<template>
  <nav class="fixed top-0 w-full z-40 border-b bg-white shadow border-transparent">
    <div class="container mx-auto flex-1 px-4 lg:px-8">
       <div class="flex items-center justify-between h-16">
         <div class="lg:w-1/5 flex items-center pr-4">
           <NuxtLink
             to="/"
             class="flex-shrink-0 flex-1 font-bold text-xl"
           >
             <img
               src="/termii-logo.svg"
               class="h-8 max-w-full"
             />
           </NuxtLink>
         </div>
         <div class="flex-1 flex justify-start w-4/6">
           <AppSearch  class="lg:block"></AppSearch>
         </div>
         <div class="lg:w-1/5 flex items-center pl-8 lg:pl-16">
            <a
              class="font-semibold leading-none text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 text-base mr-2"
              exact-active-class="text-primary-500"
            >v1.1.0</a>
           <div class="flex items-center">
             <a
               href="https://accounts.termii.com/#/"
               target="_blank"
               class="text-gray-200 rounded dark:text-gray-300 bg-blue  bg-gradient-to-r from-blue-800 to-blue-400  p-2  dark-hover:text-primary-500 ml-4"
             >
               Dashboard
             </a>
           </div>
         </div>
       </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "AppHeader"
}
</script>

<style>

</style>
