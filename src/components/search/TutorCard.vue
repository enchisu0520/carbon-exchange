<template>
    <section
        class="scroll-pt-9 w-full md:w-2/3 rounded-lg border border-gray-100 p-6 sm:p-6 lg:p-6 mb-8 shadow-md bg-white"
        :key="index"
        v-for="(tutor, index) in mockData"
    >
        <div
            class="w-full py-4 md:hidden"
        >
            <div class="grid grid-cols-9">
                <img
                    :alt="`${tutor.name}`"
                    :src="`${tutor.imgSrc}`"
                    class="col-span-2 rounded-full object-cover shadow-sm mb-3 mx-auto"
                />
                <div
                    class="col-start-3 col-end-9 ml-3"
                >
                    <h3
                        class="text-base mb-1 font-bold text-gray-900 sm:text-base"
                    >
                        {{ tutor.name }}
                    </h3>
                    <div class="text-base mb-1 text-gray-500 sm:text-sm">
                        {{ tutor.type }}
                    </div>
                    <div
                        class="flex"
                    >
                        <div class="text-center text-sm text-yellow-400 mb-2 mr-3">
                            ⭐ {{ tutor.avgReview }}
                        </div>
                        <div class="text-center text-sm">
                            {{ tutor.lessonHeld }} Lessons
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row mb-1">
                <div class="text-gray-600 text-sm mr-3">
                    Subjects: {{ tutor.subjects }}
                </div>
            </div>
            <p class="mt-1 text-sm font-medium text-gray-600">
                {{ parseIntro(tutor.intro, true) }}
            </p>
        </div>
        <div
            :data-popover-target="'popover-right-' + index"
            data-popover-placement="right"
            data-popover-offset="30"
            class="hidden md:grid md:grid-cols-4 md:gap-10 md:w-full md:py-4"
        >
            <div class="col-span-1 sm:block sm:shrink-0">
                <img
                    :alt="`${tutor.name}`"
                    :src="`${tutor.imgSrc}`"
                    class="w-4/5 rounded-full object-cover shadow-sm mb-3 mx-auto"
                />
                <div class="text-center text-sm text-yellow-400 mb-2">
                    ⭐ {{ tutor.avgReview }}
                </div>
                <div class="text-center text-sm">
                    {{ tutor.lessonHeld }} Lessons
                </div>
            </div>
            <div id="personalInfo" class="col-start-2 col-end-5">
                <div>
                    <h3
                        class="text-base mb-2 font-bold text-gray-900 sm:text-base"
                    >
                        {{ tutor.name }}
                    </h3>
                    <div class="text-base mb-2 text-gray-500 sm:text-sm">
                        {{ tutor.type }}
                    </div>
                    <div class="flex flex-row mb-3">
                        <div class="text-gray-400 text-sm mr-4">Subjects:</div>
                        <div class="text-gray-600 text-sm mr-3">
                            {{ tutor.subjects }}
                        </div>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-600">
                        {{ parseIntro(tutor.intro, false) }}
                    </p>
                </div>
            </div>
        </div>
        <div
            data-popover
            :id="'popover-right-' + index"
            role="tooltip"
            class="absolute z-10 invisible inline-block w-100 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px"
        >
            <div class="aspect-video">
                <iframe
                    class="w-full h-full rounded-tl-lg rounded-tr-lg"
                    :src="`https://www.youtube.com/embed/${tutor.ytSrcId}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div
                class="w-[55vh] pb-6"
            >
                <TimePicker
                    :showConfirmationModal="showConfirmationModal"
                    :availableTime="tutor.availableTime"
                    @selectedTimeSlots="handleToggleTimeSlots"
                />
            </div>
            <div data-popper-arrow></div>
        </div>
        <ConfirmationModal
            :is-open="isConfirmationModalOpen"
            @close-modal="hideConfirmationModal"
            :tutorName="`${tutor.name}`"
            :userName="mockUser"
            :appointmentTime="selectedTimeSlots"
            :key="selectedTimeSlots"
        />
    </section>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Dropdown } from 'flowbite-vue'
import { initDropdowns, initPopovers } from 'flowbite'
import SearchResultsTitle from './SearchResultsTitle.vue'
import TimePicker from './TimePicker.vue'
import ConfirmationModal from './ConfirmationModal.vue'

export default defineComponent({
    components: {
        Dropdown,
        TimePicker,
        SearchResultsTitle,
        ConfirmationModal
    },
    props: {
        mockData: Object
    },
    setup() {
        const mockUser = ref('John Doll')
        const isConfirmationModalOpen = ref(false)
        let selectedTimeSlots = ref({})

        const shortenString = (str, maxLength) => {
            if (str.length <= maxLength) {
                return str
            }

            const words = str.split(' ')

            let shortenedWords = []
            let count = 0
            for (let i = 0; i < words.length; i++) {
                if (count + words[i].length <= maxLength) {
                    shortenedWords.push(words[i])
                    count += words[i].length + 1
                } else {
                    break
                }
            }

            const shortenedStr = shortenedWords.join(' ') + ' ...'
            return shortenedStr
        }

        const parseIntro = (val, isMobile) => {
            let maxWordCount;
            if(isMobile){
                maxWordCount = 100
            }else{
                maxWordCount = 300
            }
            let len = val.length
            if (len <= maxWordCount) {
                return val
            }
            return shortenString(val, maxWordCount) + '...'
        }

        const showConfirmationModal = () => {
            isConfirmationModalOpen.value = true
        }

        const hideConfirmationModal = () => {
            isConfirmationModalOpen.value = false
        }

        const handleToggleTimeSlots = selectedTimeObj => {
            selectedTimeSlots.value = {}
            selectedTimeSlots.value = selectedTimeObj
        }

        onMounted(() => {
            initDropdowns()
            initPopovers()
        })

        return {
            mockUser,
            isConfirmationModalOpen,
            selectedTimeSlots,
            showConfirmationModal,
            hideConfirmationModal,
            parseIntro,
            handleToggleTimeSlots
        }
    }
})
</script>
