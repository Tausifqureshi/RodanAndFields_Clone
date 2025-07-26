/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // ✅ all HTML files in any folder
  theme: {
    extend: {},
  },
  plugins: [],
};


// jab bhi live server run kar ke project open kar re ge tab yaha command run karna padega.
// npx tailwindcss -i ./input.css -o ./dist/output.css --watch
