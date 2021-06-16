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
            <form @submit.prevent="submitSdk">
               <div class="mb-5">
                 <label>Name</label>
                 <input type="text" class="form-control" v-model="name" :class="{'error' : hasNameError }"/>
                 <span class=" error_field_message" v-if="error_message.name">{{error_message.name}}</span>
               </div>
              <div class="mb-5">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" :class="{'error' : hasEmailError }"/>
                <span class=" error_field_message" v-if="error_message.email">{{error_message.email}}</span>
              </div>
              <div class="mb-5">
                <label>Which of our services SDK did you build?</label>
                <select class="form-control" v-model="service">
                  <option>Termii Switch</option>
                  <option>Insights by Termii</option>
                  <option>Token</option>
                  <option>All Termii offerings</option>
                </select>
              </div>
              <div class="mb-10">
                <label>Link to git repo</label>
                <input type="text" class="form-control" v-model="repository_link" :class="{'error' : hasLinkError }"/>
                <span class=" error_field_message" v-if="error_message.repository_url">{{error_message.repository_url}}</span>
              </div>
               <div class="text-center">

                 <button type="submit" :disabled="isDisabled" class="p-2 rounded-lg text-white submit-button cursor-pointer">
                   {{submit_button}}
                      <span v-show="is_loading" >
															<img src="/black_spinner.svg" height="25px" width="35px"/>
                      </span>
                 </button>

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
data(){
  return{
     email:'',
     name:'',
     service:'Termii Switch',
     repository_link:'',
     submit_button: 'Submit SDK',
     is_loading: false,
     error_message:[],
     hasEmailError: false,
     hasNameError: false,
     hasLinkError: false
  }
},
  watch:{
    email(value){
      this.validateEmail(value);
    },
    name(value){
       this.validateName(value);
    },
    repository_link(value){
      this.validURL(value)
    }
  },
  computed: {
    isDisabled: function () {
      return ( !this.name || !this.email || !this.service || !this.repository_link || this.hasEmailError
              || this.hasNameError || this.hasLinkError);
    },
  },
methods:{
  async submitSdk(){
    try {
      this.submit_button = '';

      this.is_loading = true;

      await this.$axios.$post('community/submit-sdk', {
        email: this.email,
        name: this.name,
        service: this.service,
        repository_link: this.repository_link
      });
      this.submit_button = 'Submit SDK';
      this.is_loading = false;
      await this.$modal.hide('submit-sdk-modal');
      await this.$modal.show('successfully-submitted-sdk-modal');

    }catch (e) {
      this.submit_button ='Submit SDK';
      this.is_loading = false;
      let errors = e.response.data;

      if(e.response.status === 422){
        this.$error.handle422Errors(errors);
      }else{
        this.$error.handleOtherErrors(errors);
      }
    }
  },
  validateEmail(value){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
      this.error_message['email'] = '';
      this.hasEmailError = false;
      return true;
    }else {
      this.error_message['email'] = 'The email field must be a valid email';
      this.hasEmailError = true;
      return false;
    }
  },
  validateName(value){
    if ( value === ""){
      this.error_message['name'] = 'The name field is required';
      this.hasNameError = true;
    }else {
      this.error_message['name'] = '';
      this.hasNameError = false;
    }
  },
  validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if (!!pattern.test(str)){
      this.error_message['repository_url'] = '';
      this.hasLinkError = false;
      return;
    }
    this.error_message['repository_url'] = 'Enter a valid repository url';
    this.hasLinkError = true;

},
  close(){
    this.$modal.hide('submit-sdk-modal');
  }
}
}
</script>

<style scoped src="assets/css/modal.css">

</style>
