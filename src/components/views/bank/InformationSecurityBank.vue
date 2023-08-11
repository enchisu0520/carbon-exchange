<template>
	<PageWrapper title="資訊安全查核題庫">
		<div class="relative overflow-x-auto shadow-lg sm:rounded-lg p-3">
			<div class="flex items-center justify-between py-4 pr-4">
				<div>
					<button
						type="button"
						class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						@click="showExportModal"
					>
						匯出為底稿
					</button>
				</div>
				<label for="table-search" class="sr-only">Search</label>
				<div class="relative">
					<div
						class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
					>
						<svg
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="text"
						id="table-search"
						class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for items"
					/>
				</div>
			</div>
			<table
				class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
			>
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="p-4">
							<div class="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label for="checkbox-all-search" class="sr-only"
									>checkbox</label
								>
							</div>
						</th>
						<th scope="col" class="px-6 py-3 text-sm">級別</th>
						<th scope="col" class="px-6 py-3 text-sm">類別</th>
						<th scope="col" class="px-6 py-3 text-sm">項目</th>
						<th scope="col" class="px-6 py-3 text-sm">子項目</th>
						<th scope="col" class="w-20 px-3 py-3 text-sm">
							扣分等級
						</th>
						<th scope="col" class="px-6 py-3 text-sm">抽查範圍</th>
						<th scope="col" class="px-3 py-3 text-sm">動作</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						:key="index"
						v-for="(question, index) in mockQuestionBank"
					>
						<td class="w-4 p-4">
							<div class="flex items-center">
								<input
									:id="'question-checkbox-' + index"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									:value="question.id"
									v-model="exportId"
								/>
								<label
									for="checkbox-table-search-1"
									class="sr-only"
									>checkbox</label
								>
							</div>
						</td>
						<td
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							{{ question.catgory }}
						</td>
						<td class="w-24 px-6 py-4">
							{{ question.type }}
						</td>
						<td class="px-6 py-4">
							{{ question.item }}
						</td>
						<td class="px-6 py-4">
							{{ question.subitem }}
						</td>
						<td class="px-6 py-4">{{ question.level }}</td>
						<td class="px-6 py-4">
							{{ question.coverage }}
						</td>
						<td class="px-6 py-4">
							<a
								href="#"
								class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>編輯</a
							>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</PageWrapper>
	<ExportPaperModal
		:is-open="isExportModalOpen"
		@close-modal="hideExportModal"
		:extractId="exportId"
	/>
</template>
<script setup>
import PageWrapper from "../../shared/PageWrapper.vue";
import { initDropdowns } from "flowbite";
import { onMounted, ref } from "vue";
import ExportPaperModal from "../../dashboard/ExportPaperModal.vue";

let exportId = ref([]);
const isExportModalOpen = ref(false);

const showExportModal = () => {
	isExportModalOpen.value = true;
};

const hideExportModal = () => {
	console.log('trigger: ');
	isExportModalOpen.value = false;
};

const mockQuestionBank = [
	{
		id: "10001",
		catgory: "壹、資通安全(全體證券商適用)",
		type: "CC-11000 風險評鑑與管理",
		item: "1-1.檢視證券商資訊安全風險評鑑辦理情形：(適用網際網路下單之證券商)",
		subitem:
			"(1) 是否至少每年辦理資訊安全風險評鑑乙次？ (2) 是否留存執行資訊安全風險評鑑相關紀錄？",
		level: "E",
		coverage:
			"1.受查期間資訊安全風險評鑑報告及風險改善計劃(建議涵蓋重要外部議題) 2.決定可接受風險等級及核准紀錄(日期: 年 月 日)",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		id: "10002",
		catgory: "壹、資通安全(全體證券商適用)",
		type: "CC-12000 資訊安全政策",
		item: "2-1. 檢視證券商資安政策：",
		subitem:
			"(1) 資安政策是否每年至少評估乙次？ (2)資安政策修訂後是否發布給員工？",
		level: "D",
		coverage:
			"1-1.最新公告之資訊安全政策 1-2.資訊安全政策修訂評估簽或會議紀錄(評估日期: 年 月	日) 2.資訊安全政策公告及通知員工遵行之紀錄",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		id: "10003",
		catgory: "壹、資通安全(全體證券商適用)",
		type: "CC-12000 資訊安全政策",
		item: "2-2. 檢視證券商資安事件、個資事件通報暨處理：",
		subitem:
			"(1)是否建立資訊安全事件、個資事件通報暨處理作業程序？ (2)檢視公司是否發生客戶個人資料之竊取、竄改、毀損、滅失、或洩漏等資安事故，嚴重影響市場交易安全情形。",
		level: "A",
		coverage:
			"1. 資訊安全事件通報暨處理程序 2. 個資事件通報暨處理程序 3. 抽調受查期間資安事件及個資事件通報暨處理紀錄(含證券期貨市場資通安全通報紀錄)",
		violation: false,
		description: "",
		appendix: "",
	},
];

onMounted(() => {
	initDropdowns();
});
</script>
