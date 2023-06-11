<template>
    <div
        class="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 mt-5"
    >
        <h2 class="mb-5 text-3xl font-extrabold leading-tight text-white">
            {{ $t("news.release") }}
        </h2>
        <div class="w-full">
            <div class="flex flex-row mb-10">
                <div class="w-1/2 flex flex-col mr-3">
                    <div class="flex flex-row mb-4">
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.news_1.imgSrc"
                                :eventTitle="mockData.news_1.eventTitle"
                            />
                        </div>
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.news_2.imgSrc"
                                :eventTitle="mockData.news_2.eventTitle"
                            />
                        </div>
                    </div>
                    <AnnouncementCard
                        :date="mockData.comm_1.date"
                        :announcementHeader="mockData.comm_1.announcementHeader"
                        :announcementTitle="mockData.comm_1.announcementTitle"
                        :announcementBrief="mockData.comm_1.announcementBrief"
                    />
                    <AnnouncementCard
                        :date="mockData.comm_2.date"
                        :announcementHeader="mockData.comm_2.announcementHeader"
                        :announcementTitle="mockData.comm_2.announcementTitle"
                        :announcementBrief="mockData.comm_2.announcementBrief"
                    />
                    <ColorCard
                        :imgSrc="mockData.external_ad.imgSrc"
                        :announceHead="mockData.external_ad.announceHead"
                        :announcementTitle="mockData.external_ad.announcementTitle"
                        :announcementSubTitle="mockData.external_ad.announcementSubTitle"
                    />
                </div>
                <div class="w-1/2 flex flex-col">
                    <AnnouncementCard
                        :date="mockData.comm_2.date"
                        :announcementHeader="mockData.comm_2.announcementHeader"
                        :announcementTitle="mockData.comm_2.announcementTitle"
                        :announcementBrief="mockData.comm_2.announcementBrief"
                    />
                    <div class="flex flex-row mb-4">
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.news_3.imgSrc"
                                :eventTitle="mockData.news_3.eventTitle"
                            />
                        </div>
                        <div
                            class="mr-2 w-1/2"
                        >
                            <BlogCard
                                :imgSrc="mockData.news_4.imgSrc"
                                :eventTitle="mockData.news_4.eventTitle"
                            />
                        </div>
                    </div>
                    <div
                        class="mx-2 bg-gray-200 rounded-lg px-2 py-2"
                    >
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import BlogCard from './BlogCard.vue'
import AnnouncementCard from './AnnouncementCard.vue'
import ColorCard from './ColorCard.vue'
const Calendar = defineAsyncComponent(() => import('../calendar/index.vue'))

export default defineComponent({
    name: 'NewsRelease',
    components: {
        BlogCard,
        ColorCard,
        Calendar,
        AnnouncementCard
    },
    setup() {
        const mockData = ref(
            {
                news_1:{
                    imgSrc:"news_1",
                    eventTitle: "Carbon Market in Taiwan: the journey and the future prospect",
                },
                news_2:{
                    imgSrc:"news_2",
                    eventTitle: "The Growing Carbon Market Ecosystem in Taiwan",
                },
                news_3:{
                    imgSrc:"news_3",
                    eventTitle: "ETF Spotlight – Invest in the digital era with crypto asset ETFs",
                },
                news_4:{
                    imgSrc:"news_4",
                    eventTitle: "Taiwan's Carbon Market – What Is Driving Investor Demand?",
                },
                external_ad:{
                    imgSrc:"stock_exchange",
                    announceHead:"Financial Statements",
                    announcementTitle: "2023 First Quarter Results",
                    announcementSubTitle: "For the three months ended 31 March 2023."
                },
                comm_1:{
                    date:"12 May 2023",
                    announcementHeader:"Market Communications",
                    announcementTitle: "Join Our Markets",
                    announcementBrief: "Report on Initial Public Offering Applications, Delisting and Suspensions (As at 31 March 2023)"
                },
                comm_2:{
                    date:"12 Feb 2023",
                    announcementHeader:"Regulatory Announcements",
                    announcementTitle: "Join Our Markets",
                    announcementBrief: "Report on Initial Public Offering Applications, Delisting and Suspensions (As at 28 April 2023)"
                },
            }
        )

        return {
            mockData
        }
    }
})
</script>
