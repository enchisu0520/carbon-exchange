<template>
    <div class="flex items-center justify-between flex-shrink-0 px-3">
        <!-- <router-link
            to="/dashboard"
            class="inline-flex items-center gap-2"
        >
            <span class="text-lg font-bold">Simple Auditing</span>
        </router-link> -->
        <SidebarLink
            title="Simple Auditing"
            :to="{ name: 'Dashboard' }"
            imgSrc="simple-auditing-icon"
        />
        <Button
            icon-only
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :sr-text="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <Icon
                icon="mdi:menu-open"
                aria-hidden="true"
                v-show="sidebarState.isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <Icon
                icon="mdi:menu-close"
                aria-hidden="true"
                v-show="!sidebarState.isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <Icon
                icon="mdi:window-close"
                aria-hidden="true"
                :class="['lg:hidden', iconSizeClasses]"
            />
        </Button>
    </div>
</template>
<script setup>
import Button from '../shared/Button.vue'
import { Icon } from '@iconify/vue'
import { sidebarState } from '../composables'
import SidebarLink from "./SidebarLink.vue";
</script>
