<template>
	<NavBar />
	<BackgroundCarousel />
	<HighlightCards />
	<div class="sticky top-[100vh] w-full">
		<CarbonFooter />
	</div>
</template>

<script setup>
import NavBar from './components/shared/NavBar.vue'
import BackgroundCarousel from './components/home/BackgroundCarousel.vue'
import HighlightCards from './components/home/HighlightCards.vue'
import CarbonFooter from './components/shared/CarbonFooter.vue'

</script>
