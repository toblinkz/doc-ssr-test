<template>
  <nav class="fixed bg-color top-0 w-full z-40 border-b shadow border-transparent"
       @click="scrollToTop"
  >
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
<!--            <a-->
<!--              class="font-semibold leading-none text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 text-base mr-2"-->
<!--              exact-active-class="text-primary-500"-->
<!--            >v1</a>-->
           <select class="bg-color font-semibold cursor-pointer text-base">
              <option class="p-3 cursor-pointer rounded-lg">v1</option>
           </select>
           <div class="flex items-center">
             <a
               href="https://accounts.termii.com/#/"
               target="_blank"
               class="text-gray-200 rounded dark:text-gray-300 bg-blue  bg-gradient-to-r from-blue-800 to-blue-400  p-2  dark-hover:text-primary-500 ml-4"
             >
               Dashboard
             </a>
           </div>
           <button
             class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none -mr-2"
             aria-label="Menu"
             @click.stop="menu = !menu"
           >
             <IconX v-if="menu" class="w-5 h-5" />
             <IconMenu v-else class="w-5 h-5" />
           </button>

         </div>
       </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "AppHeader",
data () {
    return {
      scrolled: 0
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
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    scrollToTop () {
      if (window.innerWidth >= 1280) {
        return
      }
      window.scrollTo(0, 0)
    },
    noop () { }
  }
}
</script>

<style>

</style>
