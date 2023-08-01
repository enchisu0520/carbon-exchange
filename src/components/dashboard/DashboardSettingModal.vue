<template>
	<div
		v-if="isOpen"
		class="fixed inset-0 z-50 flex items-center justify-center overflow-auto w-full"
	>
		<div
			class="fixed inset-0 transition-opacity"
			@click="$emit('closeModal')"
		>
			<div class="absolute inset-0 bg-gray-900 opacity-50"></div>
		</div>
		<div
			class="rounded-lg shadow-lg p-6 z-10 flex flex-col w-[60%] max-h-max text-gray-900 bg-gray-100 dark:bg-dark-bg dark:text-gray-100"
		>
			<div class="flex justify-between items-center mb-4">
				<h2 class="text-lg font-bold">Setting</h2>
				<button
					class="text-gray-500 hover:text-gray-900"
					@click="$emit('closeModal')"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<form action="https://formbold.com/s/FORM_ID" method="POST">
				<div class="mb-5">
					<label
						for="user-name"
						class="mb-3 block text-base font-medium text-gray-900 dark:text-gray-100"
					>
						Dark Theme
					</label>
					<label
						class="relative inline-flex items-center mb-5 cursor-pointer"
					>
						<input type="checkbox" value="" class="sr-only peer" />
						<div
							class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
							@click="toggleDarkMode()"
						></div>
					</label>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref } from "vue";
import {
	isDark,
	toggleDarkMode,
} from "../composables";

export default defineComponent({
	props: {
		isOpen: Boolean,
	},
	setup() {
		return {
			isDark,
			toggleDarkMode,
		};
	},
});
</script>
