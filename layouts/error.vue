<template>
   <div>
								<section class="flex-1 flex justify-start w-4/6 justify-center">
									<div>
											<div>
												<img src="/error-ladder.svg">

											</div>
										<div class="text-button">
											<p class="text-center">Whoops! Page Not Found, Seems you made a wrong turn,<br>
												please check the link you typed or reload this page again. <br>If the issue still persists return to Home Page</p><br>
											<nuxt-link to="/"  class="mt-10 shadow-lg py-2 rounded-lg px-10 bg-blue text-white" >
											Back to Homepage
											</nuxt-link>
										</div>

									</div>
								</section>
			</div>
</template>
<script>
    export default {
    name: "error",

    }
</script>

<style scoped>
.bg-blue {
  background: linear-gradient(
    -48deg, #0DCBE5 -30%, #365899 60%) !important;
}
	.text-button{
		margin-bottom: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	p{

		font-weight: bold;
		color: #365899;
	}
</style>
