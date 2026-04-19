/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"JetBrains Mono"', 'monospace'],
				body: ['"Outfit"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Monaco', 'monospace'],
			},
		},
	},
	plugins: [],
}
