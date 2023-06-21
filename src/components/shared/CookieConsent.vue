<template>
	<div 
		class="fixed bottom-0 left-0 w-full h-[20vh] bg-gray-200 px-4 py-2"
		:class="{
			'hidden':
				!showCookie
		}"	
	>
		<div class="h-full container m-auto flex items-center justify-between">
			<div>
				<p class="text-xl mb-4">
					{{$t("notification")}}
				</p>
				<div
					class="text-base w-[75vw]"
				>
					{{$t("cookie.msg")}}
				</div>
			</div>
			<button
				class="text-base bg-amber-500 hover:bg-amber-700 text-white py-2 px-15 rounded w-24"
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
