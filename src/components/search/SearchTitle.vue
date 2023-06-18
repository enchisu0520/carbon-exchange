<template>
    <div class="w-5/6 container mx-auto flex flex-wrap pt-6 pb-1">
        <div id="searchResultsFilter" class="my-12 bg-white">
            <div class="text-3xl mb-8 font-bold">
                {{ $t("class.search.header1") }}
                <span class="text-red-500 mx-2">{{ $t("class.search.header2") }}</span>
                {{ $t("class.search.header3") }}
            </div>
            <p class="text-base w-5/6 md:w-full">
                {{ $t("class.search.subheader") }}
            </p>
        </div>
        <nav
            class="hidden md:flex md:text-sm md:font-medium md:mb-3 md:justify-between md:w-full"
            :class="{
                'w-full lg:px-28 sm:pl-20 left-0 z-10 fixed top-0 mt-0 bg-white shadow-md h-14 align-middle':
                    showFrozenTitle
            }"
        >
            <span class="flex">
                <!-- Language Filter -->
                <button
                    id="langFilterButton"
                    data-dropdown-toggle="langFilter"
                    data-dropdown-trigger="hover"
                    class="flex font-medium rounded-full text-sm text-black px-4 py-3 mr-3 text-center items-center focus:bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all bg-gray-100"
                    :class="{
                        'my-1.5': showFrozenTitle
                    }"
                    type="button"
                >
                    {{ filterLang }}
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
                    id="langFilter"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <a
                                @click="changeFilterLang('English')"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                            >
                                English
                            </a>
                        </li>
                        <li>
                            <a
                                @click="changeFilterLang('Deutsch')"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                            >
                                Deutsch
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Rating Filter -->
                <button
                    id="ratingFilterButton"
                    data-dropdown-toggle="ratingFilter"
                    data-dropdown-trigger="hover"
                    class="flex font-medium rounded-full text-sm text-black px-4 py-3 mr-3 text-center items-center focus:bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all bg-gray-100"
                    :class="{
                        'my-1.5': showFrozenTitle
                    }"
                    type="button"
                >
                    Ratings
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
                    id="ratingFilter"
                    class="z-10 hidden bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <div class="text-sm mx-5 mt-4 flex">
                        <span class="mr-3">Min Rating: </span>
                        <span>{{ filterMinRating }}</span>
                    </div>
                    <star-rating
                        value="3"
                        @minRating="handleMinRatingFilter"
                    ></star-rating>
                </div>

                <!-- Price Filter -->
                <button
                    id="lessonPriceFilterButton"
                    data-dropdown-toggle="lessonPriceFilter"
                    data-dropdown-trigger="hover"
                    class="flex font-medium rounded-full text-sm text-black px-4 py-3 mr-3 text-center items-center focus:bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all bg-gray-100"
                    :class="{
                        'my-1.5': showFrozenTitle
                    }"
                    type="button"
                >
                    Lesson price
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
                <!-- Dropdown menu -->
                <div
                    id="lessonPriceFilter"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 p-4"
                >
                    <PriceFilter />
                </div>
            </span>
            <div
                id="searchFilter"
                :class="{
                    'my-1.5': showFrozenTitle
                }"
            >
                <SearchFilter />
            </div>
        </nav>
        <nav
            class="w-full flex justify-between md:hidden"
            :class="{
                'w-full lg:px-28 sm:pl-20 left-0 z-10 fixed top-0 mt-0 bg-white shadow-md h-14 align-middle':
                    showFrozenTitle
            }"
        >
            <div
                class="flex"
            >
                <span class="flex">
                    <button
                        class="flex font-medium rounded-full text-sm text-black px-4 py-3 mr-3 text-center items-center focus:bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all bg-gray-100"
                        :class="{
                            'my-1.5': showFrozenTitle
                        }"
                        type="button"
                        @click="showMobileLangFilter"
                    >
                        {{ filterLang }}
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
                </span>
                <span class="flex">
                    <button
                        class="flex font-medium rounded-full text-sm text-black px-4 py-3 mr-3 text-center items-center focus:bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all bg-gray-100"
                        :class="{
                            'my-1.5': showFrozenTitle
                        }"
                        type="button"
                        @click="showMobileFilterList"
                    >
                        {{ $t("filters") }}
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
                </span>
            </div>
            <div
                id="searchFilter"
                :class="{
                    'my-1.5': showFrozenTitle
                }"
            >
                <SearchFilter 
                    :showMobileSearchFilter = "showMobileSearchFilter"
                />
            </div>
        </nav>
    </div>
    <mobile-lang-filter
        class="md:hidden"
        :isMobileLangFilterOpen = isMobileLangFilterOpen
        :changeFilterLang = changeFilterLang
        @closeMobileLangFilter = "closeMobileLangFilter"
    />
    <mobile-filter-list
        class="md:hidden"
        :handleMinRatingFilter = handleMinRatingFilter
        :isMobileFilterListOpen = isMobileFilterListOpen
        @closeMobileFilterList = "closeMobileFilterList"
    />
    <mobile-search-filter
        class="md:hidden"
        :isMobileSearchFilterOpen = isMobileSearchFilterOpen
        @closeMobileSearchFilter = "closeMobileSearchFilter"
    />
</template>
<script>
import { defineComponent, ref, onMounted, onUnmounted, toRefs } from 'vue'
import { Dropdown } from 'flowbite-vue'
import PriceFilter from './PriceFilter.vue'
import SearchFilter from './SearchFilter.vue'
import StarRating from './StarRating.vue'
import MobileLangFilter from './MobileLangFilter.vue'
import MobileFilterList from './MobileFilterList.vue'
import MobileSearchFilter from './MobileSearchFilter.vue'

export default defineComponent({
    props: {
        selectedLang: String
    },
    components: {
        Dropdown,
        StarRating,
        PriceFilter,
        SearchFilter,
        MobileLangFilter,
        MobileFilterList,
        MobileSearchFilter
    },
    setup(props, { emit }) {
        const { selectedLang } = toRefs(props)
        let showFrozenTitle = ref(false)
        let filterLang = ref('中文')
        let filterMinRating = ref(null)
        const limitPosition = -32
        let isMobileLangFilterOpen = ref(false)
        let isMobileFilterListOpen = ref(false)
        let isMobileSearchFilterOpen = ref(false)

        const showMobileLangFilter = () => {
            isMobileLangFilterOpen.value = true
        }

        const closeMobileLangFilter = () => {
            isMobileLangFilterOpen.value = false
        }

        const showMobileFilterList = () => {
            isMobileFilterListOpen.value = true
        }

        const closeMobileFilterList = () => {
            isMobileFilterListOpen.value = false
        }

        const showMobileSearchFilter = () => {
            isMobileSearchFilterOpen.value = true
        }

        const closeMobileSearchFilter = () => {
            isMobileSearchFilterOpen.value = false
        }

        const changeFilterLang = lang => {
            filterLang.value = lang
            emit('selectedLang', lang)
        }

        const handleMinRatingFilter = minRating => {
            filterMinRating.value = minRating
            emit('ratingFilter', minRating)
        }

        const handleNavBarScroll = () => {
            let navBarToTop = document
                .querySelector('#searchResultsFilter')
                .getBoundingClientRect().bottom

            if (limitPosition > navBarToTop) {
                showFrozenTitle.value = true
            } else {
                showFrozenTitle.value = false
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', handleNavBarScroll, true)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleNavBarScroll, true)
        })

        return {
            showFrozenTitle,
            filterLang,
            filterMinRating,
            selectedLang,
            isMobileSearchFilterOpen,
            isMobileLangFilterOpen,
            isMobileFilterListOpen,
            showMobileLangFilter,
            closeMobileLangFilter,
            showMobileFilterList,
            closeMobileFilterList,
            showMobileSearchFilter,
            closeMobileSearchFilter,
            changeFilterLang,
            handleMinRatingFilter
        }
    }
})
</script>
