<template>
    <!-- component -->
    <div class="px-8 my-4 py-6 rounded shadow-xl bg-white w-full mx-auto">
        <p
            class="text-lg font-bold mb-2"
        >
            {{ announcementHeader }}
        </p>
        <div class="flex justify-between items-center">
            <span class="font-light text-gray-600 text-sm">{{ date }}</span>
        </div>
        <div class="mt-2">
            <a
                class="text-base text-gray-700 font-bold hover:text-gray-600"
                href="#"
            >
                {{ announcementTitle }}
            </a>
            <p class="mt-2 text-gray-600">
                {{ announcementBrief }}
            </p>
        </div>
        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="#">Visit Article</a>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'

export default defineComponent({
    name: 'AnnouncementCard',
    components: {},
    props: {
        date: String,
        announcementHeader: String,
        announcementTitle: String,
        announcementBrief: String
    },
    setup(props) {
        return {}
    }
})
</script>
