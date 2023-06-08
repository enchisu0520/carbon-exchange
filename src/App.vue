<template>
	<NavBar />
	<BackgroundCarousel />
	<HighlightCards />
	<div class="h-[50vh] my-10 flex justify-center">
        <div class="w-3/5 absolute">
            <IntroVideo />
        </div>
    </div>
	<div class="mt-20">
        <NewsRelease />
    </div>
	<div class="sticky top-[100vh] w-full">
		<CarbonFooter />
	</div>
</template>

<script setup>
import NavBar from './components/shared/NavBar.vue'
import BackgroundCarousel from './components/home/BackgroundCarousel.vue'
import HighlightCards from './components/home/HighlightCards.vue'
import IntroVideo from './components/home/IntroVideo.vue'
import NewsRelease from './components/home/NewsRelease.vue'
import CarbonFooter from './components/shared/CarbonFooter.vue'

</script>
