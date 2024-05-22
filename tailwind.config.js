  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'school-pattern': "url('/src/assets/school-image.jpg')",
        },
        colors: {
          light_black: "rgb(0, 0, 0, 0.850)",
          light_black_two: "rgb(0, 0, 0, 0.950)",
          light_black_thr: "rgb(0, 0, 0, 0.700)",
        },
      },  
    },
    plugins: [],
  }