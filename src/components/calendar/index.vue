<template>
    <div class="flex space-x-5" v-bind="$attrs">
        <div class="w-2/5 font-semibold">
            <span v-if="selectedDateValue">
                <p class="flex justify-center my-2">TWCBEX Calendar</p>
                <div class="flex justify-center text-sm">
                    {{
                        `${selectedDateValue} - ${selectedValues.month + 1} - ${
                            selectedValues.year
                        }`
                    }}
                </div>
            </span>
        </div>
        <div class="flex flex-col flex-grow">
            <Year @selected="changeYear" />
            <Month @selected="changeMonth" />
            <Dates
                :selectedValues="selectedValues"
                :selectedDate="selectedDateValue"
                @selected="changeDate"
            />
        </div>
    </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { defineAsyncComponent, ref, reactive } from 'vue'

const Year = defineAsyncComponent(() => import('./Year.vue'))
const Month = defineAsyncComponent(() => import('./Month.vue'))
const Dates = defineAsyncComponent(() => import('./Dates.vue'))

const selectedDateValue = ref(dayjs().date())
const selectedValues = reactive({
    month: dayjs().month(),
    year: dayjs().year()
})

function changeMonth(v) {
    selectedDateValue.value = null
    selectedValues.month = v
}

function changeYear(v) {
    selectedDateValue.value = null
    selectedValues.year = v
}

function changeDate(v) {
    selectedDateValue.value = v
}
</script>
<script>
export default {
    name: 'Calendar'
}
</script>

<style scoped></style>
