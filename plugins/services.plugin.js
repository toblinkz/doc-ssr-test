
import {ErrorService} from "@/services/error.service";

export default ({ app: { $axios, $toast } }, inject) => {
	// pass $axios as a dependency to the ErrorService constructor

	const error = new ErrorService($axios, $toast)


	// inject the service, making it available in the context, component, store, etc.
	inject('error', error)
}
