<template>
	<footer
		class="flex flex-col flex-shrink-0 w-full gap-2 px-6 py-4 lg:flex-row lg:justify-between"
	>
		<p
			class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400"
		>
			<span
				class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
				>© 2023
				<router-link
					to="/dashboard"
					class="inline-flex items-center gap-2"
				>
					<span class="hover:underline"
						>Simple Auditing™</span
					> </router-link
				>. All Rights Reserved.
			</span>
		</p>
	</footer>
</template>
