<template>
	<PageWrapper title="資訊安全查核底稿">
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div class="flex items-center justify-between pb-4">
				<div>
					<button
						id="paperFilterButton"
						data-dropdown-toggle="paperFilter"
						data-dropdown-trigger="hover"
						class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						type="button"
					>
						{{ filterPaper }}
						<svg
							class="w-4 h-4 ml-2"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button>
					<div
						id="paperFilter"
						class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
					>
						<ul
							class="py-2 text-sm text-gray-700 dark:text-gray-200"
						>
							<li>
								<a
									@click="changeFilterPaper('GA-350')"
									class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
								>
									GA-350
								</a>
							</li>
							<li>
								<a
									@click="changeFilterPaper('GA-350-1')"
									class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
								>
									GA-350-1
								</a>
							</li>
							<li>
								<a
									@click="changeFilterPaper('Co-Location')"
									class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
								>
									Co-Location
								</a>
							</li>
						</ul>
					</div>
					<!-- <button
						id="dropdownRadioButton"
						data-dropdown-toggle="dropdownRadio"
						class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						type="button"
					>
						<svg
							class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
							/>
						</svg>
						Last 30 days
						<svg
							class="w-2.5 h-2.5 ml-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					<div
						id="dropdownRadio"
						class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="top"
						style="
							position: absolute;
							inset: auto auto 0px 0px;
							margin: 0px;
							transform: translate3d(522.5px, 3847.5px, 0px);
						"
					>
						<ul
							class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownRadioButton"
						>
							<li>
								<div
									class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
								>
									<input
										id="filter-radio-example-1"
										type="radio"
										value="GA-350"
										name="filter-radio"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="filter-radio-example-1"
										class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
										>GA-350</label
									>
								</div>
							</li>
							<li>
								<div
									class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
								>
									<input
										checked=""
										id="filter-radio-example-2"
										type="radio"
										value="GA-350-1"
										name="filter-radio"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="filter-radio-example-2"
										class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
										>GA-350-1</label
									>
								</div>
							</li>
							<li>
								<div
									class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
								>
									<input
										id="filter-radio-example-3"
										type="radio"
										value="Co-Lo"
										name="filter-radio"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="filter-radio-example-3"
										class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
										>Co-Lo</label
									>
								</div>
							</li>
						</ul>
					</div> -->
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
						<th scope="col" class="px-6 py-3 text-sm">級別</th>
						<th scope="col" class="px-6 py-3 text-sm">類別</th>
						<th scope="col" class="px-6 py-3 text-sm">項目</th>
						<th scope="col" class="px-6 py-3 text-sm">子項目</th>
						<th scope="col" class="w-20 px-3 py-3 text-sm">
							扣分等級
						</th>
						<th scope="col" class="px-6 py-3 text-sm">抽查範圍</th>
						<th scope="col" class="w-20 px-3 py-3 text-sm">
							是否違反
						</th>
						<th scope="col" class="px-6 py-3 text-sm">查核說明</th>
						<th scope="col" class="px-3 py-3 text-sm">底稿索引</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						:key="index"
        				v-for="(question, index) in tableData"
					>
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
							<input
								id="checkbox-table-search-1"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
						</td>
						<td class="px-6 py-4">
							<textarea
								id="message"
								rows="4"
								class="block p-2.5 h-48 w-[10vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							></textarea>
						</td>
						<td class="px-6 py-4">
							<textarea
								id="message"
								rows="4"
								class="block p-2.5 h-16 w-[3vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							></textarea>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</PageWrapper>
</template>
<script setup>
import PageWrapper from "../../shared/PageWrapper.vue";
import { initDropdowns } from "flowbite";
import { onMounted, ref, watch } from "vue";

let filterPaper = ref("GA-350");
let tableData = ref([]);

const changeFilterPaper = (paperType) => {
	filterPaper.value = paperType;
};

onMounted(() => {
	initDropdowns();
	tableData.value = mockData350
});

watch(
	() => filterPaper.value,
	(newPaper) => {
		if (newPaper == "GA-350") {
			tableData.value = mockData350;
		} else if(newPaper == "GA-350-1"){
			tableData.value = mockData3501;
		} else if(newPaper == "Co-Location"){
			tableData.value = mockDataCoLo;
		}
	}
);

const mockData350 = [
	{
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


const mockData3501 = [
	{
		catgory: "壹、資通安全(全體證券商適用)",
		type: "行情傳輸主機資安防護情形",
		item: "一、作業系統帳號管理(8-1)：",
		subitem:
			"1.是否定期清查帳號或檢視帳號異常使用情形? 2.是否訂定最高權限帳號管理辦法? 3.是否對最高權限帳號進行控管並留存相關紀錄？是否依規定設定作業系統參數?(如:優質密碼、密碼長度、密碼變更期間……)",
		level: "E",
		coverage:
			"1. 調閱該公司最高權限帳號管理規範 2. 另隨機抽核最高權限使用情形是否符合規定 3. 受查期間資訊系統最高權限及特殊權限盤點清單 4. 調閱作業系統參數",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "壹、資通安全(全體證券商適用)",
		type: "行情傳輸主機資安防護情形",
		item: "二、遠端連線安全管控(7-3)：",
		subitem:
			"1.是否對使用外部網路遠端連線至公司內部(如廠商維護及居家辦公)作業進行控管，留存紀錄並由權責主管定期覆核? 2.公司透過網際網路登入系統，是否採用多因子認證機制?(112年6月底生效)是否透過安全連線機制進行遠端連線?",
		level: "E",
		coverage:
			"1.調閱遠端連線作業管控程序 2.調閱受查期間外部網路遠端連線帳號申請單、帳號清單及帳號權限定期覆核紀錄 3.調閱受查期間外部網路遠端連線至公司紀錄及權責主管覆核紀錄 4.調閱透過網際網路，登入系統之登入方式說明及多因子認證設定畫面(如TOKEN、OTP) 5.調閱遠端連線機制說明，點對點之連線方式",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "壹、資通安全(全體證券商適用)",
		type: "行情傳輸主機資安防護情形",
		item: "三、檢視公司對防範撞庫攻擊之執行是否確實(13-2)？",
		subitem:
			"1.公司是否每日針對核心系統之帳號登入失敗紀錄、非客戶帳號嘗試登入紀錄等進行監控及分析，即時了解異常原因，並留存相關紀錄? 2.公司是否對於嘗試登入帳號之異常及不明來源IP有警示機制，進行監控分析及留存紀錄，並定期檢視以確認機制有效運作?",
		level: "D",
		coverage:
			"抽查網路下單系統或核心系統有無定期檢視異常情形 1.檢核內容至少包含帳號登入失敗紀錄及非客戶帳號登入嘗試紀錄，確認監控異常條件 2.調閱不明來源IP異常登入之定期監控及警示紀錄",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "壹、資通安全(全體證券商適用)",
		type: "行情傳輸主機資安防護情形",
		item: "四、檢視證券商網路區隔(7-1)：",
		subitem:
			"1.公司網路是否依用途區分為DMZ、營運環境、測試環境及其他環境，並有適當區隔機制(如防火牆、虛擬區域網路、實體隔離等)? 2.重要網站、伺服器系統(如網路下單系統等) 及內部網路是否以防火牆與外部網際網路隔離?",
		level: "E",
		coverage:
			"1-1.請提供網路架構圖，說明是否有網路區隔機制，檢視存放個人資料資料庫的網域 1-2.IP網段配置表(應含公司所有網段並註明各網段用途) 1-3.伺服器主機IP清單 2-1.請證券商提供網路架構圖，說明是否符合、建議相關防火牆設定非為any any",
		violation: false,
		description: "",
		appendix: "",
	},
];

const mockDataCoLo = [
	{
		catgory: "一、資通安全",
		type: "(一)檢視主機共置機房設備清單作業(CC-17010網路安全管理、CC-19000系統開發及維護、主機共置（Co–Location）服務管理辦法第四條)",
		item: "檢視證券商「主機共置用戶服務系統」之設備清單是否與財產清冊相符及具有資產取得或使用憑證：",
		subitem:
			"1.核對證券商之軟硬體設備資產清冊，其種類、數量是否相符? 2.軟硬體設備所有權人是否歸屬於該公司，如係租用，是否訂有契約或相關證明文件? 3.Co-Lo機房之設備不得使用危害國家資通安全產品。",
		level: "D",
		coverage:
			"1.列印本公司「主機共置用戶服務系統」之證券商設備清單，調閱證券商置放於Co-Lo之軟硬體設備清單及相關硬體設備型號、序號及廠牌等資訊明細表，與主機共置用戶服務系統之證券商設備清單比對是否相符。 2.調閱證券商之資產取得證明、租賃契約及相關費用收據、維護合約。 3.檢視證券商置放於Co-Lo之軟硬體設備清單，確認是否有危害國家資通安全產品。",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "一、資通安全",
		type: "(二)CC-17010網路安全管理",
		item: "檢視Co-Lo防火牆設備是否符合規定?",
		subitem:
			"1.是否建立防火牆? 2.Co-Lo防火牆之進出紀錄及其備份是否保存三年? 3.是否每年定期檢視並維護防火牆存取控管設定，並留存相關檢視紀錄？",
		level: "C",
		coverage:
			"1.調閱網路架構圖 2.調閱IP網段配置表 3.調閱防火牆之紀錄及備份保存情形 4.調閱每年檢視防火牆存取控管設定之相關紀錄",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "一、資通安全",
		type: "(三)CC-17020電腦系統及作業安全管理、CA-11210受託買賣及成交作業規範",
		item: "3-1.檢視客戶委託買賣單進出Co-Lo主機之時間紀錄檔：(自營不適用)",
		subitem:
			"(1)是否保留客戶委託買賣單進出Co-Lo主機之時間紀錄檔? (2)是否符合CA-11210受託買賣及成交作業規範完整保留委託紀錄?",
		level: "E",
		coverage:
			"抽查委託單紀錄是否完整(如委託時間、帳號等)",
		violation: false,
		description: "",
		appendix: "",
	},
	{
		catgory: "一、資通安全",
		type: "(三)CC-17020電腦系統及作業安全管理、CA-11210受託買賣及成交作業規範",
		item: "3-2.檢視Co-Lo設備維護是否符合規定?(自行維護不適用)",
		subitem:
			"(1)是否保留客戶委託買賣單進出Co-Lo主機之時間紀錄檔? (2)是否符合CA-11210受託買賣及成交作業規範完整保留委託紀錄?",
		level: "E",
		coverage:
			"1.調閱主機共置設備書面維護契約 2.調閱維護紀錄",
		violation: false,
		description: "",
		appendix: "",
	},
];
</script>
