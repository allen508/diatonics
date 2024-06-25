/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
		'node_modules/preline/dist/*.js',
		'./src/**/*.{html,js,svelte,ts}'
	],
	plugins: [
		require('preline/plugin'),
	],
  	safelist: ["dark"]
};

export default config;
