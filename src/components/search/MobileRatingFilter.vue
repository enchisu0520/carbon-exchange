<template>
    <div
        v-if="isMobileRatingFilterOpen"
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
                <h2 class="text-xl font-bold">{{ $t("rating") }}</h2>
                <button
                    class="text-gray-500 hover:text-gray-900"
                    @click="$emit('closeMobileRatingFilter')"
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
            <div
                class="flex flex-col items-start"
            >
                <star-rating
                    value="3"
                    @minRating="handleMinRatingFilter"
                ></star-rating>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import StarRating from './StarRating.vue'

export default defineComponent({
    components: {
        StarRating,
    },
    props: {
        isMobileRatingFilterOpen: Boolean,
        closeMobileRatingFilter: Function,
        handleMinRatingFilter: Function
    },
    setup(props, { emit }) {

        return {
        }
    }
})
</script>
