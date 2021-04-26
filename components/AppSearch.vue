<template>
  <div  class=" w-full relative flex flex-col justify-between">
    <div
      class="w-full relative"

    >
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<!--          <IconSearch class="h-5 w-5 text-gray-500" />-->
        </div>
        <input
          id="docsearch"
          class="block st-default-search-input w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
          type="search"
          autocomplete="off"
          placeholder="Search Documentation"
        />
      </div>

        <script async  src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" ></script>
        <script async>
          docsearch({
            apiKey: 'a7562cc1fc374082307c28b6f550d708',
            indexName: 'termii',
            inputSelector: '#docsearch', // CSS selector to target the <input />
            debug: false, // Set to `true` if you want to inspect the dropdown
          });
        </script>


    </div>
  </div>
</template>

<script>
import IconChevronRight from "../components/icons/IconChevronRight";

export default {
  components:{
    IconChevronRight
  },
  data () {
    return {
      query: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: [],
      load_script: false
    }
  },
  watch: {
    async query (query) {
      this.focusIndex = -1
      if (!query) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = await this.$content('/', { deep: true }).sortBy('position', 'asc').only(['title', 'slug', 'category', 'to']).limit(12).search(query).fetch()
      this.searching = false
    }
  },
  mounted () {
    // let docSearchScript = document.createElement('script')
    // docSearchScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js')
    // document.head.appendChild(docSearchScript)
    this.load_script = true;
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
    onFocus () {
      this.focus = true
      this.$emit('focus', true)
    },
    onBlur () {
      this.focus = false
      this.$emit('focus', false)
    },
    keyup (e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    increment () {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++
      }
    },
    decrement () {
      if (this.focusIndex >= 0) {
        this.focusIndex--
      }
    },
    go () {
      if (this.results.length === 0) {
        return
      }
      const result = this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex]
      this.$router.push(result.slug)
      // Unfocus the input and reset the query.
      this.$refs.search.blur()
      this.query = ''
    }
  }
}
</script>

