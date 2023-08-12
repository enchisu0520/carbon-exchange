import * as Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import ClassSearch from "../components/views/ClassSearch.vue";
import CommonLayout from "../components/layouts/CommonLayout.vue";
import DashboardLayout from "../components/layouts/DashboardLayout.vue";
import Dashboard from "../components/views/Dashboard.vue";
import Permission from "../components/views/Permission.vue";
import FinancialPaper from "../components/views/paper/FinancialPaper.vue";
import InternalAuditPaper from "../components/views/paper/InternalAuditPaper.vue";
import InformationSecurityPaper from "../components/views/paper/InformationSecurityPaper.vue";
import FinancialBank from "../components/views/bank/FinancialBank.vue";
import InternalAuditBank from "../components/views/bank/InternalAuditBank.vue";
import InformationSecurityBank from "../components/views/bank/InformationSecurityBank.vue";

const routes = [
	{
		path: '/',
		component: CommonLayout,
		children: [
			{
				path: "/",
				name: "home",
				component: Home,
			},
			{
				path: "/class-search",
				name: "class-search",
				component: ClassSearch,
			},
		],
	},
	{
		path: '/dashboard',
		component: DashboardLayout,
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: Dashboard,
			},
			{
				path: '/permission',
				name: 'Permission',
				component: Permission,
			},
			{
				path: '/paper/finance',
				name: 'FinancialPaper',
				component: FinancialPaper,
			},
			{
				path: '/paper/internal-autdit',
				name: 'InternalAuditPaper',
				component: InternalAuditPaper,
			},
			{
				path: '/paper/information-security',
				name: 'InformationSecurityPaper',
				component: InformationSecurityPaper,
			},
			{
				path: '/bank/finance',
				name: 'FinancialBank',
				component: FinancialBank,
			},
			{
				path: '/bank/internal-autdit',
				name: 'InternalAuditBank',
				component: InternalAuditBank,
			},
			{
				path: '/bank/information-security',
				name: 'InformationSecurityBank',
				component: InformationSecurityBank,
			},
		],
	},
];

const router = createRouter({ 
	history: createWebHashHistory(),
	routes,
});

export default router