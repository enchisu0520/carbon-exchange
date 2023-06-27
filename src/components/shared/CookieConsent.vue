<template>
	<div 
		class="fixed bottom-0 left-0 w-full max-w-fit h-[30vh] md:h-[20vh] bg-gray-200 px-4 py-2"
		:class="{
			'hidden':
				!showCookie
		}"	
	>
		<div class="h-full container m-auto md:flex md:flex-col md:w-[85vw]">
			<div>
				<p class="text-xl my-4 md:mb-4">
					{{$t("notification")}}
				</p>
			</div>
			<div
				class="flex flex-col md:flex md:justify-between"
			>
				<div
					class="text-base mb-5 md:w-[70vw]"
				>
					{{$t("cookie.msg")}}
				</div>
				<button
					class="text-base bg-blue-900 hover:bg-amber-700 text-white py-2 px-15 rounded-sm w-full md:w-40 md:h-11"
					@click="acceptCookies"
				>
					{{$t("cookie.consent")}}
				</button>
			</div>
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
