/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				appBackground: "url('/images/svg/background.svg')",
				appBackgroundDark: "url('/images/svg/background-dark.svg')",
			},
		},
	},
	plugins: [],
};
