module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', "sans-serif"],
				bebas: ['"Bebas Neue"', "cursive"],
			},
			backgroundImage: (theme) => ({
				profileImage: "url('./images/mainpicsky.jpg')",
				skyCoffee: "url('./images/skyscoffee.png')",
				"this-is-sky": "url('./images/project1snap(1).png')",
				teknipak: "url('./images/Teknipak.png')",
			}),
			spacing: {
				72: "18rem",
				84: "21rem",
				96: "24rem",
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
			},
			width: {
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
				156: "39rem",
			},
			height: {
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
				156: "39rem",
			},
			boxShadow: {
				mainBoxShadow: "7px 7px 0 rgba(55, 65, 81, 1)",
				shadowOrange: "7px 7px 0 rgba(255, 87, 34, 1)",
			}
		},
		divideColor: (theme) => ({
			...theme("borderColors"),
			primary: "#114B5F",
			secondary: "#E8F1F2",
			danger: "#e3342f",
		}),
		backgroundColor: (theme) => ({
			...theme("colors"),
			mainOrange: "#FF5722",
			secondaryBtn: "#E8F1F2",
			primaryBtn: "#233D4D",
			body: "#E8F1F2",
			primaryNav: "#E8F1F2",
		}),
		textColor: (theme) => ({
			...theme("colors"),
			mainOrange: "#FF5722",
			primary: "#222222",
			secondary: "#E8F1F2",
			paragraph: "#4A5255",
		}),
		borderColor: (theme) => ({
			...theme("colors"),
			btnOrange: "#FF5722",
			buttonBG: "#FFC0AD",
			DEFAULT: theme("colors.gray.300", "currentColor"),
			primary: "#114B5F",
		}),
		textDecorationColor: (theme) => ({
			...theme("colors"),
			mainColor: "#FF5722",
		}),
	},
	plugins: [],
};
