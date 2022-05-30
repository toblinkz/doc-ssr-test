<template>
 <div class="mt-10">
   <a
     @click="showSubmitSdkModal"
     target="_blank"
     class="text-white rounded dark:text-gray-300 bg-blue button-color cursor-pointer  p-3  dark-hover:text-primary-500 mr-2"
   >
     Submit an SDK

   </a>
   & get a Termii Swag if it works!
 </div>
</template>

<script>
export default {
name: "SubmitButton",
methods:{
  showSubmitSdkModal(){
     this.$modal.show('submit-sdk-modal');
  }
}
}
</script>

<style scoped>

.prose a{
  color: #ffffff;
}
</style>
