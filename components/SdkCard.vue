<template>
  <div>
    <div class="flex">
        <button class=" w-1/2 no-underline   mr-4 cursor-pointer ">
          <div class="flex font-bold">PHP SDK</div>
          <div class="mt-3 rounded-sm rounded-md rounded-lg overflow-hidden bg-white hover:shadow-lg rounded-lg" style="border: 1px solid #E0E0E0">
            <div class="mx-6 my-5 ">
              <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-3">Termii PHP <span class="ml-3"><i  class="icon-github text-black"></i></span></div>
              <a class="flex font-normal text-gray-dark text-sm mb-2" style="text-decoration: underline!important;">
                Douglasokolaa/termiiphp
              </a>
            </div>
          </div>
        </button>
      <button class=" w-1/2 no-underline   mr-4 cursor-pointer ">
        <div class="flex font-bold">GO SDK</div>
        <div class="mt-3 rounded-sm rounded-md rounded-lg overflow-hidden bg-white  hover:shadow-lg rounded-lg" style="border: 1px solid #E0E0E0">
          <div class="mx-6 my-5 ">
            <div class="flex items-center font-medium font-bold text-base text-blue-700 mb-3">Termii GO <span class="ml-3"><i class="icon-github text-black"></i></span></div>
            <a class="flex font-normal text-gray-dark text-sm mb-2" style="text-decoration: underline!important;">
              Douglasokolaa/termiiphp
            </a>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "SdkCard"
}
</script>

<style scoped>
button{
  outline: none!important;
}
</style>
