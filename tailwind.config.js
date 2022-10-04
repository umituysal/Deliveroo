const nativewind = require("nativewind/tailwind/native");
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  plugins: [nativewind()],
  theme: {
    extend: {},
  },
};
