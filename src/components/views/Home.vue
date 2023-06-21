<template>
	<BackgroundCarousel />
	<HighlightCards />
	<div class="md:h-[50vh] my-10 flex justify-center">
        <div class="w-full md:w-3/5 absolute">
            <IntroVideo />
        </div>
    </div>
	<div class="mt-[30vh]">
        <NewsRelease />
    </div>
	<div class="sticky top-[100vh] w-full">
		<CarbonFooter />
	</div>
	<div class="z-50 absolute top-[100vh] w-full">
		<CookieConsent />
	</div>
</template>

<script setup>
import BackgroundCarousel from '../home/BackgroundCarousel.vue'
import HighlightCards from '../home/HighlightCards.vue'
import IntroVideo from '../home/IntroVideo.vue'
import NewsRelease from '../home/NewsRelease.vue'
import CarbonFooter from '../shared/CarbonFooter.vue'
import CookieConsent from '../shared/CookieConsent.vue'
</script>
