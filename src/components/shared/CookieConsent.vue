<template>
	<div 
		class="fixed bottom-0 left-0 w-full h-[25vh] md:h-[20vh] bg-gray-200 px-4 py-2"
		:class="{
			'hidden':
				!showCookie
		}"	
	>
		<div class="h-full container mx-auto md:flex md:items-center md:justify-between">
			<div>
				<p class="text-xl my-4 md:mb-4">
					{{$t("notification")}}
				</p>
				<div
					class="text-base w-full mb-3 md:w-[75vw]"
				>
					{{$t("cookie.msg")}}
				</div>
			</div>
			<button
				class="text-base bg-blue-900 hover:bg-amber-700 text-white py-2 px-15 rounded-sm w-full md:w-40"
				@click="acceptCookies"
			>
				{{$t("cookie.consent")}}
			</button>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup(props, { emit }) {
		let showCookie = ref(true)

		const acceptCookies = ()=>{
			showCookie.value = false
		}

		return {
			showCookie,
			acceptCookies
		};
	},
});
</script>
