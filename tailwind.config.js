/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette"],
        alexBrush: ["Alex Brush"],
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0, transform: "translateY(-50px)" },
          '100%': {
            opacity: 1
          },
        },
        logo: {
          '0%': { transform: "scale(0)" },
          '100%': {
            transform: "scale(1)"
          },
        },
        trigoLogo: {
          '0%': { transform: "translate(-508px, -52%) rotateY(180deg) scale(0.75)" },
          '100%': { transform: "translate(-8px, -52%) rotateY(180deg) scale(0.75)" },
        },
        trigoLogo2: {
          '0%': { transform: "translate(-508px, -82%) rotateY(180deg) scale(0.65)" },
          '100%': { transform: "translate(20px, -82%) rotateY(180deg) scale(0.65)" },
        },
        subtitleAppear: {
          '0%': { opacity: 0, transform: "translateY(-50px)" },
          '100%': { opacity: 1, transform: "translateY(0)" },
        },
        offersAppear: {
          '0%': { opacity: 0, transform: "translateX(-500px)" },
          '100%': { opacity: 1, transform: "translateX(0)" },
        },
        underlineSubtitle: {
          '0%': { width: "0%" },
          '100%': { width: "100%" },
        },
        iconFraseAnimation: {
          '0%': { transform: "translateY(-200px)" },
          '100%': { transform: "translateY(400px)" },
        },
        jump: {
          '0%': { transform: "translateY(0px)" },
          '50%': { transform: "translateY(-10px)" },
          '100%': { transform: "translateY(0px)" },
        },
        cart: {
          '0%': { transform: "rotate(0deg)" },
          '10%': { transform: "rotate(10deg)" },
          '30%': { transform: "rotate(-10deg)" },
          '45%': { transform: "rotate(5deg)" },
          '55%': { transform: "rotate(-5deg)" },
          '60%': { transform: "rotate(0deg)" },
        },

      },
      animation: {
        'wiggle': 'wiggle .5s ease-in-out',
        'trigoLogo': 'trigoLogo 1s ease-in-out',
        'trigoLogo2': 'trigoLogo2 1.3s ease-in-out',
        'logo': 'logo .5s ease-in-out',
        'subtitleAppear': 'subtitleAppear .5s ease-in-out',
        'offersAppear': 'offersAppear .5s ease-in-out',
        'underlineSubtitle': 'underlineSubtitle .5s ease-in-out',
        'jump': 'jump .5s ease-in-out',
        'jump2': 'jump .7s ease-in-out',
        'jump3': 'jump .9s ease-in-out',
        'jump4': 'jump 1.1s ease-in-out',
        'jump5': 'jump 1.3s ease-in-out',
        'jump6': 'jump 1.5s ease-in-out',
        'jump6': 'jump 1.5s ease-in-out',
        'iconFraseAnimation': 'iconFraseAnimation 2.5s linear infinite',
        'cart': 'cart .5s linear',
      },
    },
  },
  plugins: [require("daisyui")],
}
