export default {
  theme: {
    extend: {
      fontFamily: {
        sans: 'SVN-Gilroy, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-relax': 'cubic-bezier(.55, .09, .68, .53)',
        'in-regular': 'cubic-bezier(.55, .06, .67, .19)',
        'in-strong': 'cubic-bezier(.89, .03, .68, .22)',
        'in-powerful': 'cubic-bezier(.75, .05, .85, .06)',
        'out-relax': 'cubic-bezier(.25, .46, .45, .94)',
        'out-regular': 'cubic-bezier(.21, .61, .35, 1)',
        'out-strong': 'cubic-bezier(.16, .84, .44, 1)',
        'out-powerful': 'cubic-bezier(.23, 1, .32, 1)',
        'in-out-relax': 'cubic-bezier(.45, .03, .51, .96)',
        'in-out-regular': 'cubic-bezier(.64, .05, .35, 1)',
        'in-out-strong': 'cubic-bezier(.77, 0, .17, 1)',
        'in-out-powerful': 'cubic-bezier(.86, 0, .07, 1)',
      },
      colors: {
        'prussian-blue': {
          '50': '#b3e4ff',
          '100': '#9edbff',
          '200': '#75d6ff',
          '300': '#2ec7ff',
          '400': '#00a5e0',
          '500': '#0081c2',
          '600': '#0065a3',
          '700': '#004675',
          '800': '#003459', // That used on design
          '900': '#00263d',
          '950': '#000f1a',
        },
        'pink-lady': {
          '50': '#fef8ee',
          '100': '#fceed5', // That used on design
          '200': '#f8dcb0',
          '300': '#f4c27d',
          '400': '#ee9e49',
          '500': '#ea8425',
          '600': '#db6a1b',
          '700': '#b65118',
          '800': '#91411b',
          '900': '#753619',
          '950': '#3f1a0b',
        },
      },
    },
  },
}
