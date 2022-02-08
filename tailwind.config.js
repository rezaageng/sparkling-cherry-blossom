module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "rgba(12,18,32,1)",
      },
      animation: {
        "bounce-right": "bounceright 1s ease-out infinite",
      },
      keyframes: {
        bounceright: {
          "0%, 100%": { transform: "translateX(20%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
