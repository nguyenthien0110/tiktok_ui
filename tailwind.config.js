export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc2c55",
        black: "#000000",
        white: "#fff",
        color: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(22, 24, 35, ${opacityValue})`
            : "rgba(22, 24, 35, 1)",
      },
      borderColor: {
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        base: "1.4rem", // 16px
      },
      spacing: {
        "default-h": "60px",
        "default-w": "1150px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-360deg)" },
          "10%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
