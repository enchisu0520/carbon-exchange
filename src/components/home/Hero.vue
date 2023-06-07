<template>
    <section class="h-screen flex flex-col justify-center items-center">
        <div class="w-5/6 mx-auto dark:bg-gray-900">
            <div
                class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12"
            >
                <transition name="slide" mode="out-in">
                    <div
                        class="mr-auto place-self-center lg:col-span-7"
                        :key="currentIndex"
                    >
                        <!-- Content for currentIndex 0 -->
                        <div v-if="currentIndex === 0">
                            <h1
                                class="text-white max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
                            >
                                {{ $t('hero.title.1') }}
                            </h1>
                            <p
                                class="font-base max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 py-5"
                            >
                                {{ $t('hero.header.1') }}
                            </p>
                            <div
                                class="mt-10 mr-10 space-y-4 flex flex-col text-right sm:space-y-0 sm:space-x-4"
                            >
                                <a
                                    class="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    type="button"
                                    href="/"
                                    >{{ $t('hero.learn.more') }} ></a
                                >
                            </div>
                        </div>
                        <!-- Content for currentIndex 0 -->
                        <div v-if="currentIndex === 1">
                            <h1
                                class="text-white max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
                            >
                                {{ $t('hero.title.2') }}
                            </h1>
                            <p
                                class="font-base max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 py-5"
                            >
                                {{ $t('hero.header.2') }}
                            </p>
                            <div
                                class="mt-10 mr-10 space-y-4 flex flex-col text-right sm:space-y-0 sm:space-x-4"
                            >
                                <a
                                    class="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    type="button"
                                    href="/"
                                    >{{ $t('hero.learn.more') }} ></a
                                >
                            </div>
                        </div>
                        <!-- Content for currentIndex 0 -->
                        <div v-if="currentIndex === 2">
                            <h1
                                class="text-white max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
                            >
                                {{ $t('hero.title.3') }}
                            </h1>
                            <p
                                class="font-base max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 py-5"
                            >
                                {{ $t('hero.header.3') }}
                            </p>
                            <div
                                class="mt-10 mr-10 space-y-4 flex flex-col text-right sm:space-y-0 sm:space-x-4"
                            >
                                <a
                                    class="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    type="button"
                                    href="/"
                                    >{{ $t('hero.learn.more') }} ></a
                                >
                            </div>
                        </div>
                    </div>
                </transition>
                <div class="hidden lg:mb-0 lg:col-span-5 lg:flex flex-col">
                    <MarketOverview />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, toRefs, computed } from 'vue'
import MarketOverview from './MarketOverview.vue'

export default defineComponent({
    name: 'Hero',
    components: {
        MarketOverview
    },
    props: {
        currentIndex: Number
    },
    setup(props) {
        return {}
    }
})
</script>
<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.8s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-150%);
}
</style>
