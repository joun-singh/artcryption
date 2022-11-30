/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    container: {
      center: true,
      padding:"0 10rem"
    },
		fontFamily: {
			kern: ["KERN", "cursive"],
			haffer: ["HAFFER", "cursive"],
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		extend: {
			colors: {
				grey: "#D8D8D8",
				cyan: "#46A8E0",
        light:"#6F6F6F"
			},
		},
	},

	plugins: [],
};
