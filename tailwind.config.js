/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flatline: {
          "0%, 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75%, 80%, 85%, 90%, 95%":
            {
              transform: "scale(1)",
            },
          "6%, 11%, 16%, 21%, 26%, 31%, 36%, 41%, 46%, 51%, 56%, 61%, 66%, 71%, 76%, 81%, 86%, 91%, 96%":
            {
              transform: "scale(1.3)",
            },
          "100%": {
            transform: "scale(1)",
            opacity: 0,
          },
        },
      },
      animation: {
        flatline: "flatline 1.5s infinite",
      },
      colors: {
        primary: "#00b6db",
      },
    },
  },
  plugins: [],
};
