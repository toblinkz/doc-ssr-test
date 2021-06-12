<template>
  <modal name="successfully-submitted-sdk-modal" height="auto" width="450">
    <div  style="display: block; padding-left: 9px;">
      <div>
        <div>
          <div class="modal-header" >
            <button type="button" class="close" @click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <center>
              <img  src="/success_art.svg"/>

              <p class="text-lg font-bold mb-3">You just helped a developer<br> ship faster!</p>
              <p class="text-sm mb-10 ">Thank you for your contribution. Our team would contact you after our review.</p>
              <p class="underline text-base cursor-pointer" style="color: #FF313D">Be a part of our Dev Loop on Slack.</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: "SuccessfullySubmittedSdkModal",
  methods:{
    close(){
      this.$modal.hide('successfully-submitted-sdk-modal');
    }
  }
}
</script>

<style scoped src="assets/css/modal.css">

</style>
