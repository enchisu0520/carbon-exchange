<template>
    <div class="carousel-wrapper">
        <div class="carousel">
            <button class="carousel-button left" @click="previousImage">
                <i class="fas fa-chevron-left"></i>
            </button>

            <button class="carousel-button right" @click="nextImage">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div
                v-for="(image, index) in images"
                :class="[
                    'carousel-item',
                    { previous: index === previousIndex },
                    { current: index === currentIndex },
                    { done: index === previousIndex && index !== currentIndex }
                ]"
                :style="{
                    backgroundImage: `url(${image})`
                }"
            >
            </div>
        </div>
    </div>
    <Hero :currentIndex="currentIndex" />
</template>

<script>
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import Hero from './Hero.vue'

export default defineComponent({
    components: {
        Hero,
    },
    setup() {
        const images = ref([
            'img/forest-canopy.jpg',
            'img/busy-city-night.jpg',
            'img/green-coast.jpg'
        ])
        const currentIndex = ref(0)
        const previousIndex = ref(null)

        // Function to cycle through images
        const previousImage = () => {
            previousIndex.value = currentIndex.value
            currentIndex.value =
                (currentIndex.value - 1 + images.value.length) %
                images.value.length
        }

        const nextImage = () => {
            previousIndex.value = currentIndex.value
            currentIndex.value = (currentIndex.value + 1) % images.value.length
        }

        // Start the carousel
        onMounted(() => {
            setInterval(nextImage, 5000) // Change image every 3 seconds
        })

        return {
            previousImage,
            nextImage,
            images,
            currentIndex,
            previousIndex
        }
    }
})
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 100%; /* Adjust the height as needed */
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1; /* Push the carousel behind other content */
}
.carousel {
    width: 100%;
    height: 100%; /* Adjust the height as needed */
    position: relative;
}

.carousel-item {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.8s;
}

.carousel-item.previous,
.carousel-item.current {
    opacity: 1;
}

.carousel-item.done {
    opacity: 0;
}

.carousel-button {
    position: absolute;
    z-index: 100;
    padding: 15px;
    font-size: 24px;
    top: 10%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}

.carousel-button.left {
    left: 20px;
}

.carousel-button.right {
    right: 20px;
}
</style>
