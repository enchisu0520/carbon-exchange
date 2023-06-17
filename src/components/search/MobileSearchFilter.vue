<template>
    <div
        v-if="isMobileSearchFilterOpen"
        class="fixed inset-0 z-50 flex items-center justify-center overflow-auto w-full"
    >
        <!-- <div
            class="fixed inset-0 transition-opacity"
            @click="$emit('closeMobileFilter')"
        >
            <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div> -->
        <div
            class="bg-white rounded-lg shadow-lg p-6 z-10 flex flex-col w-full h-full"
        >
            <div class="flex justify-between items-center mb-4">
                <div
                    class="z-0 block relative w-5/6"
                >
                    <form
                        role="form"
                        class="relative flex z-50 bg-white rounded"
                    >
                        <button
                            class="bg-gray-100 text-white rounded-l font-semibold px-4 py-3 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-black dark:text-white-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                v-on:click="search()"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="enter your search here"
                            class="rounded-r flex-1 px-6 py-3 text-gray-700 focus:outline-none bg-gray-100 hover:bg-gray-200 border-hidden"
                        />
                    </form>
                </div>
                <button
                    class="text-gray-500 hover:text-gray-900"
                    @click="$emit('closeMobileSearchFilter')"
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
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        isMobileSearchFilterOpen: Boolean,
        changeMobileFilterOpen: Function
    },
    setup(props, { emit }) {

        return {
        }
    }
})
</script>
