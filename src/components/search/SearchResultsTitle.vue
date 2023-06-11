<template>
    <div id="searchResultsTitle" class="bg-gray-100 mb-8">
        <div class="text-lg flex font-bold mb-2">
            {{ $t("class.search.result.title") }}
        </div>
        <p class="text-base">
            {{ $t("class.search.result.title.content") }}
        </p>
    </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
    props: {
        selectedLang: String
    },
    setup(props) {
        const { selectedLang } = toRefs(props)

        return {
            selectedLang
        }
    }
})
</script>
