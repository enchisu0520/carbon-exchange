<template>
    <div
        class="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 mt-5"
    >
        <h2 class="mb-10 text-3xl font-extrabold leading-tight text-white">
            Latest Events
        </h2>
        <div class="w-full">
            <div class="flex flex-row mb-10">
                <div class="w-1/2 flex flex-col">
                    <div class="flex flex-row mb-4">
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.event_1.imgSrc"
                                :eventTitle="mockData.event_1.eventTitle"
                            />
                        </div>
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.event_2.imgSrc"
                                :eventTitle="mockData.event_2.eventTitle"
                            />
                        </div>
                    </div>
                    <div class="mr-2">
                        <ColorCard
                            :imgSrc="mockData.announce_1.imgSrc"
                            :announceHead="mockData.announce_1.announceHead"
                            :announcementTitle="mockData.announce_1.announcementTitle"
                            :announcementSubTitle="mockData.announce_1.announcementSubTitle"
                        />
                    </div>
                </div>
                <div class="w-1/2 flex flex-col">
                    <div class="mb-4">
                        <ColorCard
                            :imgSrc="mockData.announce_2.imgSrc"
                            :announceHead="mockData.announce_2.announceHead"
                            :announcementTitle="mockData.announce_2.announcementTitle"
                            :announcementSubTitle="mockData.announce_2.announcementSubTitle"
                        />
                    </div>
                    <div class="flex flex-row">
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.event_3.imgSrc"
                                :eventTitle="mockData.event_3.eventTitle"
                            />
                        </div>
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.event_4.imgSrc"
                                :eventTitle="mockData.event_4.eventTitle"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import BlogCard from './BlogCard.vue'
import ColorCard from './ColorCard.vue'

export default defineComponent({
    name: 'HighlightCard',
    components: {
        BlogCard,
        ColorCard
    },
    setup() {
        const mockData = ref(
            {
                event_1:{
                    imgSrc:"event_1",
                    eventTitle: "Carbon Market in Taiwan: the journey and the future prospect",
                },
                event_2:{
                    imgSrc:"event_2",
                    eventTitle: "ETFs and the Growing Virtual Asset Ecosystem in Global Financial Markets",
                },
                event_3:{
                    imgSrc:"event_3",
                    eventTitle: "Driving Exciting Changes for Our Connect Programme",
                },
                event_4:{
                    imgSrc:"event_4",
                    eventTitle: "ETF Spotlight – Invest in the digital era with crypto asset ETFs",
                },
                announce_1:{
                    imgSrc:"office_building",
                    announceHead:"Financial Statements",
                    announcementTitle: "2023 First Quarter Results",
                    announcementSubTitle: "For the three months ended 31 March 2023."
                },
                announce_2:{
                    imgSrc:"stock_market",
                    announceHead:"Latest Announcements",
                    announcementTitle: "Join Our Markets",
                    announcementSubTitle: "Find out more about products in Taiwan Carbon Trade Exchange."
                },
            }
        )

        return {mockData}
    }
})
</script>
