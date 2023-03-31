/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#51E9EF",
        light: "#F5F5F5",
        dark: "#1C1C1C",
        secondary: "#39B0A8",
        gray: "#5C5B5B",
        darkprimary: "#2A4745",
      },


      fontFamily:{
        // MonumentExtended: ['Monument Extended','Arial, Helvetica, sans-serif'],
        Poppins: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },

      fontSize: {
        huge: 'clamp(2.4rem, 6vw, 3rem)',
        h1: '70px',
        h2: '32px',
        h3: '24px',
        h4: '18px',
        h5: '14px',
        h6: '12px',
        p: '16px',
      },


      screens: {
          xs: '340px',
        }
    },



    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }
  },
  plugins: [],
}