<template>
    <article
        class="overflow-hidden rounded-lg bg-white shadow-sm"
    >
        <img
            alt="Office"
            :src="`img/${imgSrc}.jpg`"
            class="h-56 w-full object-cover"
        />

        <div class="p-4 sm:p-6">
            <a href="#">
                <h3 class="text-lg font-medium text-gray-900">
                    {{ eventTitle }}
                </h3>
            </a>
            <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
                Find out more
                <span
                    aria-hidden="true"
                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                    &rarr;
                </span>
            </a>
        </div>
    </article>
</template>
<script>
import { defineComponent, ref, watch, onMounted, toRefs } from 'vue'

export default defineComponent({
    name: 'BlogCard',
    components: {},
    props: {
        imgSrc: String,
        eventTitle: String,
    },
    setup(props) {

        return {
        }
    }
})
</script>
