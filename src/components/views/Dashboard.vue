<template>
    <PageWrapper>
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>
            </div>
        </template>

        <!-- Statistics section -->
        <StatisticsSection />

        <!-- Sales section -->
        <SalesSection />

        <!-- Latest users & transaction section -->
        <LatestSection />
    </PageWrapper>
</template>
<script setup>
import PageWrapper from '../shared/PageWrapper.vue'
import StatisticsSection from '../dashboard/StatisticsSection.vue'
import SalesSection from '../dashboard/SalesSection.vue'
import LatestSection from '../dashboard/LatestSection.vue'
import Button from '../shared/Button.vue'
</script>
