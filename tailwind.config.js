export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc2c55",
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
        "txt-default": "#000",
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
