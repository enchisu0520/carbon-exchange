<template>
    <div class="pt-5 px-4 pb-4 overflow-x-auto rounded-lg backdrop-blur-[80px] bg-opacity-10">
        <div
            class="mb-2 text-white text-lg font-bold"
        >
            {{ $t("market.overview") }}
        </div>
        <table class="min-w-full divide-y-2 divide-gray-200 text-xs">
            <thead class="ltr:text-left rtl:text-right text-xs">
                <tr>
                    <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-white"
                    >
                        {{ $t("market.name") }}
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-white"
                    >
                        {{ $t("market.index") }}
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-white"
                    >
                        {{ $t("market.open") }}
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-white"
                    >
                        {{ $t("market.high") }}
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-white"
                    >
                        {{ $t("market.low") }}
                    </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr>
                    <td
                        class="whitespace-nowrap px-2 py-2 font-medium text-white"
                    >
                        Hang Seng Index
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        <div>
                            19,869.82
                        </div>
                        <div
                            class="text-green-500"
                        >
                            +242.58 (+1.24%)
                        </div>
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,525.06
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,874.18
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,498.04
                    </td>
                </tr>

                <tr>
                    <td
                        class="whitespace-nowrap px-2 py-2 font-medium text-white"
                    >
                        HSCEI
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        <div>
                            19,869.82
                        </div>
                        <div
                            class="text-green-500"
                        >
                            +242.58 (+1.24%)
                        </div>
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,525.06
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,874.18
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,498.04
                    </td>
                </tr>

                <tr>
                    <td
                        class="whitespace-nowrap px-2 py-2 font-medium text-white"
                    >
                        Hang Seng TECH Index
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        <div>
                            19,869.82
                        </div>
                        <div
                            class="text-green-500"
                        >
                            +242.58 (+1.24%)
                        </div>
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,525.06
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,874.18
                    </td>
                    <td class="whitespace-nowrap px-2 py-2 text-white">
                        19,498.04
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
    },
    setup() {
        return {}
    }
})
</script>
