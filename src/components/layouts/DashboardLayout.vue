<template>
    <div class="min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-bg dark:text-gray-100">
        <Sidebar 
            :showDashboardSettingModal="showDashboardSettingModal"
            :isDashboardSettingModalOpen="isDashboardSettingModalOpen"
        />
        <div
            style="transition-property: margin; transition-duration: 150ms"
            :class="[
                'min-h-screen flex flex-col',
                {
                    'lg:ml-64': sidebarState.isOpen,
                    'md:ml-16': !sidebarState.isOpen,
                },
            ]"
        >
            <!-- <Navbar /> -->

            <router-view></router-view>

            <DashboardFooter />
        </div>
        <DashboardSettingModal
            :is-open="isDashboardSettingModalOpen"
            @close-modal="hideDashboardSettingModal"
        />
    </div>
</template>
<script setup>
import { ref } from "vue";
import { sidebarState, toggleDarkMode, isDark } from '../composables'
import Sidebar from '../sidebar/Sidebar.vue'
// import Navbar from '@/components/Navbar.vue'
import DashboardSettingModal from '../dashboard/DashboardSettingModal.vue'
import DashboardFooter from '../shared/DashboardFooter.vue'

let isDashboardSettingModalOpen = ref(false)
const showDashboardSettingModal = () => {
    isDashboardSettingModalOpen.value = true
}

const hideDashboardSettingModal = () => {
    isDashboardSettingModalOpen.value = false
}
</script>