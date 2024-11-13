/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				fadeInTop: "fadeInTop 1s ease-out forwards",
			},
			keyframes: {
				fadeInTop: {
					"0%": {
						opacity: 0,
						transform: "translateY(40px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
			colors: {
				primary: "var(--primary)",
			}
		},
	},
	plugins: [],
}
