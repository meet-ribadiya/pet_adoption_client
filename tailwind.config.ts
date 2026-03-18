// export default {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // dark
        secondary: "#4B5563", // gray
        accent: "#FF6B6B",
        background: "#F9FAFB",
      },
    },
  },
  plugins: [],
};