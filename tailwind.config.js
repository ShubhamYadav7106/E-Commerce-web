const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      screens: {
      'xs': {'max': '576px'}, // xs: <5760px max-width
      'sm': '576px',          // sm: ≥576px
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',

      
    },
     },
   },
   plugins: [],
 });
 