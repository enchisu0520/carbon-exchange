import * as Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import ClassSearch from "../components/views/ClassSearch.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/class-search",
		name: "class-search",
		component: ClassSearch,
	},
];

const router = createRouter({ 
	history: createWebHashHistory(),
	routes,
});

export default router