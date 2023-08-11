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
			class="rounded-lg shadow-lg p-6 z-10 flex flex-col w-[60%] max-h-max text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-100"
		>
			<div class="flex justify-between items-center mb-4">
				<h2 class="text-lg font-bold">匯出成底稿</h2>
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
						for="paper-name"
						class="mb-3 block text-base font-medium text-gray-900 dark:text-gray-100"
					>
						底稿名稱
					</label>
					<input
						type="text"
						name="tutor-name"
						id="tutor-name"
						placeholder="請輸入底稿名稱"
						class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:bg-gray-700 dark:text-gray-100 dark:border-none"
					/>
				</div>
				<div class="mb-5">
					<label
						for="privilege"
						class="mb-3 block text-base font-medium text-gray-900 dark:text-gray-100"
					>
						權限管理
					</label>
					<div class="flex flex-wrap">
						<div class="flex w-full">
							<div
								class="fixed"
								@click="isDropdownOpen = false"
							></div>
							<div
								class="relative inline-block"
								@click="isDropdownOpen = !isDropdownOpen"
							>
								<div
									class="rounded-l-lg inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm pl-5 pr-10 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
								>
									<span class="flex-shrink-0">{{
										selectedPrivilege
									}}</span>
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										class="flex-shrink-0 w-5 h-5 ml-1"
									>
										<path
											:class="{
												'rotate-180': isDropdownOpen,
											}"
											class="transition duration-300 ease-in-out origin-center transform"
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<transition
									enter-active-class="transition duration-300 ease-out transform"
									enter-class="-translate-y-3 scale-95 opacity-0"
									enter-to-class="translate-y-0 scale-100 opacity-100"
									leave-active-class="transition duration-150 ease-in transform"
									leave-class="translate-y-0 opacity-100"
									leave-to-class="-translate-y-3 opacity-0"
								>
									<div
										v-show="isDropdownOpen"
										class="absolute pt-2 w-36"
									>
										<div
											class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl dark:bg-gray-600 dark:text-white dark:border-none"
										>
											<div class="relative">
												<a
													class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap dark:text-white hover:cursor-pointer dark:hover:bg-[#6A64F1] hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
													@click="
														changeSelectedPrivilege(
															'admin'
														)
													"
													>管理員</a
												>
												<a
													class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap dark:text-white hover:cursor-pointer dark:hover:bg-[#6A64F1] hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
													@click="
														changeSelectedPrivilege(
															'editor'
														)
													"
													>編輯者</a
												>
												<a
													class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap dark:text-white hover:cursor-pointer dark:hover:bg-[#6A64F1] hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
													@click="
														changeSelectedPrivilege(
															'viewer'
														)
													"
													>檢視者</a
												>
											</div>
										</div>
									</div>
								</transition>
							</div>

							<label for="member" class="sr-only"
								>成員</label
							>
							<select
								id="member"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option selected>選擇成員</option>
								<option value="姜孟含">姜孟含</option>
								<option value="林鴻鈞">林鴻鈞</option>
								<option value="陳昌宏">陳昌宏</option>
								<option value="劉保鈞">劉保鈞</option>
							</select>
						</div>
					</div>
				</div>
				<div class="-mx-3 flex flex-wrap">
					<div class="w-full px-3 sm:w-1/2">
						<div>
							<label
								for="date"
								class="mb-3 block text-base font-medium text-gray-900 dark:text-gray-100"
							>
								題目編號
							</label>
						</div>
					</div>
				</div>
				<div
					class="-mx-3 flex flex-wrap"
					v-for="questionId in extractId"
				>
					<div class="w-full px-3 sm:w-1/2">
						<div
							class="w-full rounded-md border border-[#e0e0e0] mb-5 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-none"
						>
							{{ questionId }}
						</div>
					</div>
				</div>
				<div class="flex justify-end">
					<button
						class="hover:shadow-form w-24 rounded-md bg-[#6A64F1] py-2 px-4 mr-3 text-center text-base font-semibold text-white outline-none"
					>
						確認
					</button>
					<button
						class="hover:shadow-form w-24 rounded-md bg-gray-500 py-2 px-4 text-center text-base font-semibold text-white outline-none"
						@click="$emit('closeModal')"
					>
						取消
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
	isOpen: Boolean,
	extractId: Array,
});

let selectedPrivilege = ref("檢視者");
let isDropdownOpen = ref(false);

const changeSelectedPrivilege = (privilege) => {
	if (privilege === "admin") {
		selectedPrivilege.value = "管理員";
	} else if (privilege === "editor") {
		selectedPrivilege.value = "編輯者";
	} else if (privilege === "viewer") {
		selectedPrivilege.value = "檢視者";
	}
};
</script>
