<template>
    <div class="w-full">
        <SearchTitle
            @selectedLang="handleLangChange"
            :selectedLang="selectedLang"
            @ratingFilter="handleRatingFilter"
        />
        <div class="w-full bg-gray-100">
            <div class="mx-auto w-full py-4">
                <div class="mx-auto relative w-5/6 flex flex-col px-3">
                    <SearchResultsTitle :selectedLang="selectedLang" />
                    <TutorCard :mockData="showData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import SearchTitle from '../search/SearchTitle.vue'
import SearchResultsTitle from '../search/SearchResultsTitle.vue'
import TutorCard from '../search/TutorCard.vue'

export default defineComponent({
    components: {
        SearchTitle,
        SearchResultsTitle,
        TutorCard
    },
    setup() {
        const mockData = ref([
        {
                name: 'Tashe Graaff',
                imgSrc: 'https://static-a.imgix.net/woman.jpg?w=320&h=320&fit=crop&crop=faces&q=90',
                type: 'Professional Teacher',
                subjects: 'Carbon Trade',
                intro: 'I would characterize myself as an ambitious and enthusiastic young teacher who hopes to bring positivity to each classroom.  I am organized, prepared and present for each lesson. During lessons I aim to provide a calm, focused and friendly environment and I model a professional and positive attitude. I will be sure to motivate you when are doing well and help you understand what your problems are and how they can improve when you are not doing so well. Your lessons will be straight forward and clear with a variety of activities.',
                ytSrcId: 'CrM01OiD6eE',
                avgReview: 3.8,
                lessonHeld: 83,
                hourlyRate: 25,
                availableTime: {
                    '6/1/2023': ['9:00', '10:00'],
                    '6/2/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/3/2023': ['8:00', '10:00', '11:00'],
                    '6/4/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/5/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/6/2023': ['9:00', '10:00'],
                    '6/7/2023': ['9:00', '10:00'],
                    '6/8/2023': ['8:00', '10:00', '11:00'],
                    '6/9/2023': ['9:00', '10:00', '11:00'],
                    '6/10/2023': ['9:00', '10:00', '11:30'],
                    '6/11/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/12/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/13/2023': ['8:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/14/2023': ['9:00', '10:00'],
                    '6/15/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/16/2023': ['9:00', '10:00', '11:00'],
                    '6/17/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/18/2023': ['8:00', '10:00', '11:00'],
                    '6/19/2023': ['9:00', '10:00', '11:00'],
                    '6/20/2023': ['9:00', '10:00', '11:30'],
                    '6/21/2023': ['9:00', '10:00'],
                    '6/22/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/23/2023': ['8:00', '10:00', '11:00'],
                    '6/24/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/25/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/26/2023': ['9:00', '10:00'],
                    '6/27/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/28/2023': ['8:00', '10:00', '11:00'],
                    '6/29/2023': ['9:00', '10:00', '11:00'],
                    '6/30/2023': ['9:00', '10:00', '11:30'],
                }
            },
            {
                name: 'Alan R.',
                imgSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                type: 'Super Tutor',
                subjects: 'Carbon Neutral',
                intro: "Hello, I'm a 4 Year B.Ed diploma & TEFL qualified English Teacher with 11 years full-time experience teaching students of all ages and cultures in London and Cape Town. I was also a business owner and business trainer for 16 years. I enjoy the outdoors, arts and travel. Book a trial lesson with me to begin your English learning adventure.",
                ytSrcId: 'yJYc4oWn-UY',
                avgReview: 4.5,
                lessonHeld: 4008,
                hourlyRate: 18,
                availableTime: {
                    '6/1/2023': ['9:00', '10:00'],
                    '6/2/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/3/2023': ['8:00', '10:00', '11:00'],
                    '6/4/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/5/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/6/2023': ['9:00', '10:00'],
                    '6/7/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/8/2023': ['8:00'],
                    '6/9/2023': ['9:00', '10:00'],
                    '6/10/2023': ['9:00', '10:00', '11:30'],
                    '6/11/2023': ['9:00', '10:00'],
                    '6/12/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/13/2023': ['8:00', '10:00', '11:00'],
                    '6/14/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/15/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/16/2023': ['9:00', '10:00'],
                    '6/17/2023': ['9:00', '10:00', '11:00', '11:30', '12:30'],
                    '6/18/2023': ['8:00', '10:00', '11:00'],
                    '6/19/2023': ['9:00', '10:00', '11:00'],
                    '6/20/2023': ['9:00', '10:00', '11:30'],
                    '6/21/2023': ['9:00', '10:00'],
                    '6/22/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/23/2023': ['8:00', '10:00', '11:00'],
                    '6/24/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/25/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/26/2023': ['9:00', '10:00'],
                    '6/27/2023': ['9:00', '10:00'],
                    '6/28/2023': ['8:00', '10:00', '11:00'],
                    '6/29/2023': ['9:00', '10:00', '11:00'],
                    '6/30/2023': ['9:00', '10:00', '11:30'],
                }
            },
            {
                name: 'Annalena Gomez',
                imgSrc: 'https://assets.imgix.net/blog/woman-hat.jpg?w=640',
                type: 'Community Tutor',
                subjects: 'Emission Assessment',
                intro: 'I have a very student-driven teaching style. That means you can let me know if you prefer conversational practice or need help preparing for a language exam. I want you to feel comfortable during our lessons, so I provide my students with the resources and support they need. I have a lot of patience, so don’t worry if you are a beginner. I will help you take your language skills to the next level.',
                ytSrcId: 'Wf51wKugsaI',
                avgReview: 4.3,
                lessonHeld: 706,
                hourlyRate: 10,
                availableTime: {
                    '6/1/2023': ['9:00', '10:00'],
                    '6/2/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/3/2023': ['8:00', '10:00', '11:00'],
                    '6/4/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/5/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/6/2023': ['9:00', '10:00'],
                    '6/7/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/8/2023': ['8:00', '10:00', '11:00'],
                    '6/9/2023': ['9:00', '10:00', '11:00'],
                    '6/10/2023': ['9:00', '10:00', '11:30'],
                    '6/11/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/12/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/13/2023': ['8:00', '10:00', '11:00'],
                    '6/14/2023': ['9:00', '10:00'],
                    '6/15/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/16/2023': ['9:00', '10:00'],
                    '6/17/2023': ['9:00', '10:00', '11:00', '11:30', '15:00'],
                    '6/18/2023': ['8:00', '10:00', '11:00', '12:00'],
                    '6/19/2023': ['9:00', '10:00', '11:00'],
                    '6/20/2023': ['9:00', '10:00', '11:30'],
                    '6/21/2023': ['9:00', '10:00'],
                    '6/22/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/23/2023': ['8:00', '10:00', '11:00'],
                    '6/24/2023': ['9:00', '10:00', '11:00', '12:30', '13:00'],
                    '6/25/2023': ['9:00', '10:00', '11:00', '12:00', '14:00'],
                    '6/26/2023': ['9:00', '10:00'],
                    '6/27/2023': ['9:00', '10:00', '11:00', '11:30'],
                    '6/28/2023': ['8:00'],
                    '6/29/2023': ['9:00', '10:00'],
                    '6/30/2023': ['9:00', '10:00', '11:30'],
                }
            }
        ])
        let minRatingScore = ref(0);

        const showData = computed(() => {
            return mockData.value.filter((item)=>item.avgReview > minRatingScore.value)
        });

        const selectedLang = ref('中文')

        const handleRatingFilter = minRating => {
            minRatingScore.value = minRating
        }

        const handleLangChange = lang => {
            selectedLang.value = lang
        }

        return {
            mockData,
            showData,
            selectedLang,
            handleRatingFilter,
            handleLangChange
        }
    }
})
</script>
