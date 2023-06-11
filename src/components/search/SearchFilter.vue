<template>
    <div class="justify-center">
        <div class="relative sm:mx-auto">
            <div class="overflow-hidden z-0 rounded-full relative">
                <form
                    role="form"
                    class="relative flex z-50 bg-white rounded-full"
                >
                    <button
                        class="bg-gray-100 text-white rounded-l-full font-semibold px-4 py-3 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
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
                        class="rounded-r-full flex-1 px-6 py-3 text-gray-700 focus:outline-none bg-gray-100 hover:bg-gray-200 border-hidden"
                    />
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { Input, Button } from 'flowbite-vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Input,
        Button
    },
    setup() {
        const search = ({}) => {}
        return {
            search
        }
    }
})
</script>
