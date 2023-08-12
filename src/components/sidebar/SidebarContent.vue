<template>
	<PerfrectScrollbar
		tagname="nav"
		aria-label="main"
		class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
	>
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
				>偏好設定</span
			>
		</button>
        <SidebarLink
            title="底稿權限管理"
            :to="{ name: 'Permission' }"
            :active="isCurrentRoute('Permission')"
            icon="icon-park-outline:permissions"
        />
        <SidebarCollapsible
			icon="clarity:list-line"
			title="查核題庫"
			:active="isCurrentPath('/bank')"
		>
			<SidebarCollapsibleItem
                :to="{ name: 'FinancialBank' }"
                title="財務"
                :active="isCurrentRoute('/bank/finance')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'InternalAuditBank' }"
                title="內控內稽"
                :active="isCurrentRoute('/bank/internal-audit')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'InformationSecurityBank' }"
                title="資訊安全"
                :active="isCurrentRoute('/bank/information-security')"
            />
		</SidebarCollapsible>
		<SidebarCollapsible
			icon="icon-park-outline:data-sheet"
			title="個人工作底稿"
			:active="isCurrentPath('/paper')"
		>
			<!-- <SidebarCollapsibleItem
                :to="{ name: 'FinancialPaper' }"
                title="財務"
                :active="isCurrentRoute('/paper/finance')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'InternalAuditPaper' }"
                title="內控內稽"
                :active="isCurrentRoute('/paper/internal-autdit')"
            /> -->
            <SidebarCollapsibleItem
                :to="{ name: 'InformationSecurityPaper' }"
                title="資訊安全"
                :active="isCurrentRoute('/paper/information-security')"
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
