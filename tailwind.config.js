/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-background": "url('Pages/images/bg.png')",
			},
			backgroundColor: {
				"custom-nav": "rgba(111, 68, 54, 0.8)",
				"custom-bg": "rgba(106, 64, 40, 0.94)",
			},
			textColor: {
				"custom-color": "rgba(111, 68, 54, 0.8)",
				custom2: "rgba(27, 11, 11, 0.75)",
			},
			fontFamily: {
				"my-font": ["inika", "sans-serif"],
			},
		},
	},
	plugins: [],
};
