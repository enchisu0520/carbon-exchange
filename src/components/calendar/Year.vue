<template>
    <div class="bg-gray-950 p-3 rounded-t-lg grid place-items-center bg-gray-700">
        <span class="flex items-center space-x-3 select-none text-black">
            <ChevronLeftIcon
                class="h-5 w-5 text-gray-400 cursor-pointer"
                @click="() => modifyYear(-1)"
            />
            <span
                class="text-white"
            >{{ year }}</span>
            <ChevronRightIcon
                class="h-5 w-5 text-gray-400 cursor-pointer"
                @click="() => modifyYear(1)"
            />
        </span>
    </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const yearEmit = defineEmits(['selected'])
const year = ref(dayjs().year())

function modifyYear(v) {
    year.value += v
    yearEmit('selected', year.value)
}
</script>
