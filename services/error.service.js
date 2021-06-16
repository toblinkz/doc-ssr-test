export class ErrorService {

	constructor(axios, toast) {

		this.$axios = axios;
		this.$toast = toast;
	}

	handle422Errors(data){
		let errors = data.errors
		for (let key in errors) {
			errors[key].forEach(err => {
				this.$toast.error(err);
			});
		}

	}

	handleOtherErrors(data){
		this.$toast.error(data.message);
	}

}
