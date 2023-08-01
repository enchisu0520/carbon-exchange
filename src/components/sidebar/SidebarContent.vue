<template>
	<PerfrectScrollbar
		tagname="nav"
		aria-label="main"
		class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
	>
		<!-- <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
            icon="mdi:view-dashboard"
        /> -->
		<button
			class="p-2 flex items-center gap-2 rounded-md transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2"
			@click="showDashboardSettingModal"
		>
			<Icon
				icon="quill:cog-alt"
				aria-hidden="true"
				class="flex-shrink-0 w-6 h-6"
			/>
			<span
				class="text-base font-medium"
				v-show="sidebarState.isOpen || sidebarState.isHovered"
				>Setting</span
			>
		</button>
		<SidebarCollapsible
			icon="mdi:note-outline"
			title="Paper"
			:active="isCurrentPath('/paper')"
		>
			<SidebarCollapsibleItem
                :to="{ name: 'FinancialPaper' }"
                title="Finance"
                :active="isCurrentRoute('/paperfinance')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'InternalAuditPaper' }"
                title="Internal Audit"
                :active="isCurrentRoute('/paperinternal-autdit')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'InformationSecurityPaper' }"
                title="Information Security"
                :active="isCurrentRoute('/paperinformation-security')"
            />
		</SidebarCollapsible>

		<!-- <SidebarCollapsible icon="mdi:shield-star-outline" title="Authentication">
            <SidebarCollapsibleItem :to="{ name: 'Login' }" title="Login" />
            <SidebarCollapsibleItem
                :to="{ name: 'Register' }"
                title="Register"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'VerifyEmail' }"
                title="Verify Email"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ForgotPassword' }"
                title="Forgot Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ResetPassword' }"
                title="Reset Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ConfirmPassword' }"
                title="Confirm Password"
            />
        </SidebarCollapsible> -->
	</PerfrectScrollbar>
</template>
<script setup>
import { useRouter } from "vue-router";
import PerfrectScrollbar from "../shared/PerfectScrollbar.vue";
import { sidebarState } from '../composables'
import SidebarLink from "./SidebarLink.vue";
import SidebarCollapsible from "./SidebarCollapsible.vue";
import SidebarCollapsibleItem from "./SidebarCollapsibleItem.vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
    showDashboardSettingModal: {
        type: Function,
        required: true
    },
})

const isCurrentRoute = (routeName) => {
	return useRouter().currentRoute.value.name == routeName;
};

const isCurrentPath = (path) => {
	return useRouter().currentRoute.value.path.startsWith(path);
};
</script>
