<script setup>
import { onMounted, ref } from 'vue'
import BaseCard from './BaseCard.vue'
import ApexCharts from 'apexcharts'
import { Icon } from '@iconify/vue'

const chartEl = ref(null)

const props = defineProps({
    title: String,
    result: [String, Number],
    status: {
        type: String,
        default: 'success',
        validator(value) {
            return ['success', 'warning', 'danger'].includes(value)
        },
    },
    percentage: {
        type: [String, Number],
    },
    actions: {
        type: Array,
        default: [],
    },
    chartData: {
        type: [Array, Object],
        default: () => ({
            data: [],
            categories: [],
        }),
    },
    icon: {
        type: String,
        default: 'mdi:chart-bar',
    },
})

let statusIcon
let statusIconClasses

switch (props.status) {
    case 'success':
        statusIcon = 'mdi:trending-up'
        statusIconClasses = 'w-4 h-4 text-green-500 dark:text-green-200'
        break
    case 'warning':
        statusIcon = 'mdi:trending-neutral'
        statusIconClasses = 'w-4 h-4 text-yellow-500 dark:text-yellow-200'
        break
    case 'danger':
        statusIcon = 'mdi:trending-down'
        statusIconClasses = 'w-4 h-4 text-red-500 dark:text-red-200'
        break

    default:
        statusIcon = 'mdi:trending-up'
        statusIconClasses = 'w-4 h-4 text-green-500 dark:text-green-200'
        break
}
onMounted(() => {
    let chart = new ApexCharts(chartEl.value, {
        series: [
            {
                name: props.title,
                data: props.chartData.data ?? props.chartData,
            },
        ],
        chart: {
            height: '100%',
            width: '100%',
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            type: 'datetime',
            categories: props.chartData.categories ?? [
                '1/11/2000',
                '2/11/2000',
                '3/11/2000',
                '4/11/2000',
                '5/11/2000',
                '6/11/2000',
                '7/11/2000',
                '8/11/2000',
                '9/11/2000',
                '10/11/2000',
                '11/11/2000',
                '12/11/2000',
                '1/11/2001',
            ],
            tickAmount: 10,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        title: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            x: { show: false },
        },
    })

    chart.render()
})
</script>

<template>
    <BaseCard :actions="actions">
        <template #header>
            <div class="flex items-center gap-6">
                <Icon
                    :icon="icon"
                    aria-hidden="true"
                    class="w-8 h-8 text-purple-500"
                />

                <div class="flex items-center gap-2">
                    <span
                        :class="[
                            'p-0.5 block rounded-full',
                            {
                                'bg-green-100 dark:bg-green-800':
                                    status == 'success',
                                'bg-yellow-100 dark:bg-yellow-800':
                                    status == 'warning',
                                'bg-red-100 dark:bg-red-800':
                                    status == 'danger',
                            },
                        ]"
                    >
                        <Icon
                            :icon="statusIcon"
                            :class="statusIconClasses"
                            aria-hidden="true"
                        />
                    </span>

                    <span
                        :class="[
                            'text-xs font-medium',
                            {
                                'text-green-500': status == 'success',
                                'text-yellow-500': status == 'warning',
                                'text-red-500': status == 'danger',
                            },
                        ]"
                        >{{ percentage }}</span
                    >
                </div>
            </div>
        </template>

        <div class="relative grid grid-cols-2 overflow-hidden">
            <div>
                <h4 class="text-3xl font-semibold">{{ result }}</h4>
                <p class="text-base font-medium text-gray-700 dark:text-gray-400">{{ title }}</p>
            </div>
            <div class="relative flex items-center max-h-16">
                <div ref="chartEl"></div>
            </div>
        </div>
    </BaseCard>
</template>
