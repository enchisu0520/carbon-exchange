<template>
    <nav
        class="px-4 backdrop-filter backdrop-blur-[8px] bg-opacity-10 sticky sm:px-6 md:px-32 lg:px-32 dark:bg-gray-900 w-full z-50 top-0 dark:border-gray-600"
        :class="{ fixed: currentUrl === '/' }"
    >
        <div class="container mx-auto flex justify-between">
            <inertia-link
                href="/about"
                class="flex items-center md:hover:text-purple-700"
            >
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap text-white transition-colors"
                    >Taiwan Carbon Exchange</span
                >
            </inertia-link>
            <div class="flex flex-col">
                <nav class="flex justify-end">
                    <Dropdown>
                        <template #trigger>
                            <button
                                class="hidden md:inline-flex font-medium rounded-lg text-sm px-4 py-1.5 text-center items-center focus:text-yellow-400 hover:text-yellow-400 focus:outline-white focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all"
                            >
                                <span
                                    class="text-gray-200 hover:text-yellow-400 focus:text-yellow-400"
                                    >{{$t('navbar.about.us')}}</span
                                >
                                <div class="ml-2 text-gray-400">
                                    <Icon icon="arrow-down" size="sm" />
                                </div>
                            </button>
                        </template>

                        <!-- Dropdown menu -->
                        <div
                            class="bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            >
                                <svg
                                    class="block fill-white text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                    ></path>
                                </svg>
                                <li>
                                    <a
                                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                    >
                                        About TCE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                    >
                                        Investor Relation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                    <Dropdown>
                        <template #trigger>
                            <button
                                class="hidden md:inline-flex font-medium rounded-lg text-sm px-4 py-1.5 text-center items-center hover:text-yellow-400 focus:text-yellow-400 focus:outline-white focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all"
                            >
                                <span
                                    class="text-gray-200 hover:text-yellow-400 focus:text-yellow-400"
                                    >{{$t('navbar.related.sites')}}</span
                                >
                                <div class="ml-2 text-gray-400">
                                    <Icon icon="arrow-down" size="sm" />
                                </div>
                            </button>
                        </template>

                        <!-- Dropdown menu -->
                        <div
                            class="bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            >
                                <svg
                                    class="block fill-white text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                    ></path>
                                </svg>
                                <li>
                                    <a
                                        class="text-sm block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                        href="https://www.hkex.com.hk/Join-Our-Market/Sustainable-Finance/HKEX-STAGE?sc_lang=en"
                                    >
                                        Sustainable & Green Exchange
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-sm block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                        href="https://www.lme.com/"
                                    >
                                        London Metal Exchange
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                    <Dropdown>
                        <template #trigger>
                            <button
                                class="hidden md:inline-flex font-medium rounded-lg text-sm text-black px-4 py-1.5 text-center items-center focus:outline-white focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all"
                            >
                                <span
                                    :class="`fi mr-2 ${
                                        $i18n.locale === 'en' ? 'fi-gb' : 'fi-tw'
                                    }`"
                                ></span>
                                <div class="ml-2 text-gray-400">
                                    <Icon icon="arrow-down" size="sm" />
                                </div>
                            </button>
                        </template>

                        <!-- Dropdown menu -->
                        <div
                            class="bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            >
                                <svg
                                    class="block fill-white text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                    ></path>
                                </svg>
                                <li>
                                    <a
                                        @click="$i18n.locale = 'en'"
                                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                    >
                                        <span class="fi fi-gb mr-2"></span>
                                        EN
                                    </a>
                                </li>
                                <li>
                                    <a
                                        @click="$i18n.locale = 'tw'"
                                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-purple transition-all cursor-pointer"
                                    >
                                        <span class="fi fi-tw mr-2"></span>
                                        TW
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                </nav>
                <nav>
                    <ul class="flex">
                        <!--Hoverable Link-->
                        <li
                            class="rounded-t-lg hoverable hover:bg-teal-700 hover:text-white"
                        >
                            <a
                                href="#"
                                class="rounded-t-lg text-white relative block py-3 lg:px-6 lg:p-3 text-sm lg:text-base font-bold hover:bg-teal-700 hover:text-white"
                                >{{$t('navbar.header.products')}}</a
                            >
                            <div
                                class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700"
                            >
                                <div
                                    class="container mx-auto w-full flex flex-wrap justify-between mx-2"
                                >
                                    <div
                                        class="w-full text-white mb-8 text-center"
                                    >
                                        <h2 class="font-bold text-2xl">
                                            Listen, why don’t you wait out by
                                            the speeder.
                                        </h2>
                                        <p>
                                            our droids. They’ll have to wait
                                            outside. We don’t want them here.
                                        </p>
                                    </div>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{ $t('navbar.menu.products.carbon.platform') }}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{ $t('navbar.menu.products.carbon.watch') }}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{ $t('navbar.menu.products.energy.watch') }}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{ $t('navbar.menu.products.sustainable.finder') }}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!--end Hoverable Link-->
                        <!--Hoverable Link-->
                        <li
                            class="rounded-t-lg hoverable hover:bg-yellow-600 hover:text-white"
                        >
                            <a
                                href="#"
                                class="rounded-t-lg text-white relative block py-3 lg:px-6 lg:p-3 text-sm lg:text-base font-bold hover:bg-yellow-600 hover:text-white"
                                >{{$t('navbar.header.services')}}</a
                            >
                            <div
                                class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-yellow-600"
                            >
                                <div
                                    class="container mx-auto w-full flex flex-wrap justify-between mx-2"
                                >
                                    <div
                                        class="w-full text-white mb-8 text-center"
                                    >
                                        <h2 class="font-bold text-2xl">
                                            Listen, why don’t you wait out by
                                            the speeder.
                                        </h2>
                                        <p>
                                            our droids. They’ll have to wait
                                            outside. We don’t want them here.
                                        </p>
                                    </div>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.services.education.platform')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.services.certification.platform')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.services.trade.consult')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.services.measure.consult')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!--end Hoverable Link-->
                        <!--Hoverable Link-->
                        <li
                            class="rounded-t-lg hoverable hover:bg-gray-500 hover:text-white"
                        >
                            <a
                                href="#"
                                class="rounded-t-lg text-white relative block py-3 lg:px-6 lg:p-3 text-sm lg:text-base font-bold hover:bg-gray-500 hover:text-white"
                                >{{$t('navbar.header.join')}}</a
                            >
                            <div
                                class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-500"
                            >
                                <div
                                    class="container mx-auto w-full flex flex-wrap justify-between mx-2"
                                >
                                    <div
                                        class="w-full text-white mb-8 text-center"
                                    >
                                        <h2 class="font-bold text-2xl">
                                            Listen, why don’t you wait out by
                                            the speeder.
                                        </h2>
                                        <p>
                                            our droids. They’ll have to wait
                                            outside. We don’t want them here.
                                        </p>
                                    </div>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.join.carbon.trade')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.join.carbon.provider')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.join.carbon.certification')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                    <ul
                                        class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3"
                                    >
                                        <div class="flex items-center">
                                            <svg
                                                class="h-8 mb-3 mr-3 fill-current text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                                                />
                                            </svg>
                                            <h3
                                                class="font-bold text-xl text-white text-bold mb-2"
                                            >
                                                {{$t('navbar.menu.join.us')}}
                                            </h3>
                                        </div>
                                        <p class="text-gray-100 text-sm">
                                            Thul klivian doldur thisspiasian
                                            calrissian. Garindan d8 aurra
                                            twi'lek tund polis gen'dai sola
                                            tarpals.
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg
                                                class="h-6 pr-3 fill-current text-teal-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                                                >Find out more...</a
                                            >
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!--end Hoverable Link-->
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
    <!-- Mobile menu -->
    <aside
        id="mobile-menu"
        class="fixed top-0 right-0 z-40 w-full p-4 pt-[calc(92px+1rem)] transition-transform -translate-y-full dark:bg-gray-800"
        tabindex="-1"
        aria-label="Sidebar menu"
    >
        <div class="h-full overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2">
                <li>
                    <inertia-link
                        v-if="!showLanguages"
                        href="/"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Icon icon="home" />
                        <span class="ml-3">Home</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link
                        v-if="!showLanguages"
                        href="/tutors"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Icon icon="magnifying-glass-dark" />
                        <span class="ml-3">Find Sherpas</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link
                        v-if="!showLanguages"
                        href="/besherpa"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Icon icon="users-group" />
                        <span class="ml-3">Be a Sherpa</span>
                    </inertia-link>
                </li>
                <li>
                    <button
                        @click="toggleLanguages()"
                        class="w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Icon icon="globe" />
                        <span class="ml-3">Language</span>
                        <span class="ml-auto">
                            <Icon
                                :icon="
                                    showLanguages
                                        ? 'arrow-down'
                                        : 'chevron-right'
                                "
                            />
                        </span>
                    </button>
                    <ul v-if="showLanguages">
                        <hr class="border-2 border-gray-100 my-4" />
                        <button
                            @click="$i18n.locale = 'en'"
                            class="w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            EN
                            <span class="ml-3">English</span>
                        </button>
                        <button
                            @click="$i18n.locale = 'tw'"
                            class="w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            TW
                            <span class="ml-3">Mandarin</span>
                        </button>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { Dropdown } from 'flowbite-vue'
import { initDrawers } from 'flowbite'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import Icon from '../Icon.vue'


onMounted(() => {
    initDrawers()
})


let showLanguages = ref(false)

const toggleLanguages = () => (showLanguages.value = !showLanguages.value)


</script>
<style>
/* ––––––––––––––––––––––––––––––––––––––––––––––––––
    Based on: https://codepen.io/nickelse/pen/YGPJQG
    Influenced by: https://sproutsocial.com/
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
}

/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
    position: static;
}

.hoverable > a:after {
    content: '\25BC';
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
}

.hoverable:hover .mega-menu {
    display: block;
}

/* #toggle Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.toggleable > label:after {
    content: '\25BC';
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
}

.toggle-input {
    display: none;
}
.toggle-input:not(checked) ~ .mega-menu {
    display: none;
}

.toggle-input:checked ~ .mega-menu {
    display: block;
}

.toggle-input:checked + label {
    color: white;
    background: #2c5282; /*@apply bg-blue-800 */
}

.toggle-input:checked ~ label:after {
    content: '\25B2';
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
}
</style>
