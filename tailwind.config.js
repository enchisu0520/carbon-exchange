module.exports = {
	darkMode: 'class',
	content: [
		"./index.html", 
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				dark: {
					bg: '#151823',
					'eval-1': '#222738',
					'eval-2': '#2A2F42',
					'eval-3': '#2C3142',
				},
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
