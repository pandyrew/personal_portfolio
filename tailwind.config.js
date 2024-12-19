/** @type {import('tailwindcss').Config} */

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "noise-bg": "url('/noise.png')",
      },
      colors: {
        yellow: {
          500: "#EAB308",
        },
        red: {
          500: "#EF4444",
        },
        blue: {
          500: "#3B82F6",
        },
        cyan: {
          500: "#06B6D4",
        },
        violet: {
          500: "#8B5CF6",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
