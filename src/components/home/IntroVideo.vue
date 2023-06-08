<template>
    <div class="aspect-video">
        <iframe
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/66XwG1CLHuU`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'

export default defineComponent({
    name: 'IntroViedo',
    components: {
    },
    setup() {
        return {}
    }
})
</script>
