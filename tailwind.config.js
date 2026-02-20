import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          primary: "#3FBF9A",
          primaryDark: "#1F6F5C",
          secondary: "#9FD9C2",
          secondaryLight: "#E6F4EE",
        },
        text: {
          primary: "#0F2F28",
          secondary: "#4F6F67",
          inverse: "#FFFFFF",
        },
        background: {
          main: "#F9FCFB",
          section: "#E6F4EE",
          card: "#FFFFFF",
        },
        border: {
          subtle: "#E1ECE7",
        },
        status: {
          success: "#3FBF9A",
          warning: "#F4C430",
          error: "#E25555",
        },
      },
    },
  },
  plugins: [animate],
};
