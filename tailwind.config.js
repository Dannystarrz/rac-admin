/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'activeBg':'url(../images/ActiveBg.png)',
        'pendingBg':'url(../images/pending bg.png)',
        'tOrderBg':'url(../images/tOrderBG.png)',
      },
      backgroundColor:{
        "primary": "#060C2C",
        "transGrey": "hsla(312, 9%, 89%, 0.08)",
        "active":"hsla(312, 9%, 89%, 0.08)",
        "ripple": "hsla(312, 9%, 89%, 0.08)",
      },
      borderRadius:{
        "ripple": "834.375rem",
      },
      colors:{
        "fadedBrd":"rgba(179, 38, 30, 0.50)",
        "totalExportB": "rgba(74, 68, 88, 0.50",
      },
    },
  },
  plugins: [],
}
