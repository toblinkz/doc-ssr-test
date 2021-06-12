<template>
  <modal name="submit-sdk-modal" height="auto" width="450">
    <div  style="display: block; padding-left: 9px;">
      <div>
        <div>
          <div class="modal-header" >
            <button type="button" class="close" @click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <p class="text-2xl font-bold" style="color:#1A3D5D">Submit an SDK</p>
          </div>
          <div class="modal-body">
            <p class="text-sm font-bold mb-1">Thank you for deciding to be a contributor</p>
            <p class="text-sm mb-3">Fill in your details below. Our team would contact
              you as soon as we review your submission.</p>
            <form>
               <div class="mb-5">
                 <label>Name</label>
                 <input type="text" class="form-control"/>
               </div>
              <div class="mb-5">
                <label>Email</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="mb-5">
                <label>Which of our services SDK did you build?</label>
                <select class="form-control">
                  <option>Termii Switch</option>
                  <option>Insights by Termii</option>
                  <option>Token</option>
                  <option>All Termii offerings</option>
                </select>
              </div>
              <div class="mb-10">
                <label>Link to git repo</label>
                <input type="text" class="form-control"/>
              </div>
               <div class="text-center">
                 <a @click="()=>{this.$modal.hide('submit-sdk-modal'); this.$modal.show('successfully-submitted-sdk-modal');}" class="p-3 rounded-lg text-white submit-button cursor-pointer">Submit SDK</a>

               </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
name: "SubmitSdkModal",
methods:{
  close(){
    this.$modal.hide('submit-sdk-modal');
  }
}
}
</script>

<style scoped src="assets/css/modal.css">

</style>
