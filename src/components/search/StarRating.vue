<template>
    <div class="star-rating">
        <label
            class="star-rating__star"
            v-for="(rating, index) in ratings"
            :key="index"
            :class="{
                'is-selected': defaultVal >= rating && defaultVal != null,
                'is-disabled': disabled
            }"
            v-on:click="set(rating)"
            v-on:mouseover="starOver(rating)"
            v-on:mouseout="starOut()"
        >
            <input
                class="star-rating star-rating__checkbox"
                type="radio"
                :value="rating"
                v-model="defaultVal"
                :disabled="disabled"
            />★
        </label>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {},
    setup(props, { emit }) {
        let temp_value = ref(null)
        let ratings = ref([1, 2, 3, 4, 5])
        let disabled = ref(false)
        let defaultVal = ref(null)

        const starOver = index => {
            if (!disabled.value) {
                temp_value.value = defaultVal.value
                return (defaultVal.value = index)
            }
        }

        const starOut = () => {
            if (!disabled.value) {
                return (defaultVal.value = temp_value.value)
            }
        }

        const set = setValue => {
            if (!disabled.value) {
                temp_value.value = setValue
                emit('minRating', setValue)
                return (defaultVal.value = setValue)
            }
        }

        return {
            temp_value,
            ratings,
            disabled,
            defaultVal,
            starOver,
            starOut,
            set
        }
    }
})
</script>
<style lang="scss">
%visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}

.star-rating {
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 3vh;
    font-size: 20px;
    &__star {
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.5em;
        color: #ababab;
        transition: color 0.2s ease-out;

        &:hover {
            cursor: pointer;
        }

        &.is-selected {
            color: #ffd700;
        }

        &.is-disabled:hover {
            cursor: default;
        }
    }

    &__checkbox {
        @extend %visually-hidden;
    }
}
</style>
