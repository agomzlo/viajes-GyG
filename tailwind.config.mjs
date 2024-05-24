import animations from '@agomzlo11/tailwindcss-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'alejandro': "url('/alejandro/background.webp')",
				'alejandro-mobile': "url('/alejandro/background-mobile.webp')",
				'gema': "url('/gema/background.webp')",
				'gema-mobile': "url('/gema/background-mobile.webp')",
			},
			colors: {
				'alejandro-primary': '#93c5fd',
				'alejandro-secondary': '#bfdbfe',
				'gema-primary': '#f9a8d4',
				'gema-secondary': '#fbcfe8',
			},
		},
	},
	plugins: [animations],
}
