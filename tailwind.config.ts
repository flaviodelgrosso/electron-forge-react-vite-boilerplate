import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gray colors
        gray: {
          50: '#fafbfc',
          100: '#f6f8fa',
          200: '#e1e4e8',
          300: '#d1d5da',
          400: '#959da5',
          500: '#6a737d',
          600: '#586069',
          700: '#444d56',
          800: '#2f363d',
          900: '#24292e',
        },
        // Blue colors
        blue: {
          50: '#f1f8ff',
          100: '#dbedff',
          200: '#c8e1ff',
          300: '#79b8ff',
          400: '#2188ff',
          500: '#0366d6',
          600: '#005cc5',
          700: '#044289',
          800: '#032f62',
          900: '#05264c',
        },
        // Green colors
        green: {
          50: '#f0fff4',
          100: '#dcffe4',
          200: '#bef5cb',
          300: '#85e89d',
          400: '#34d058',
          500: '#28a745',
          600: '#22863a',
          700: '#176f2c',
          800: '#165c26',
          900: '#144620',
        },
        // Red colors
        red: {
          50: '#ffeef0',
          100: '#ffdce0',
          200: '#fdaeb7',
          300: '#f97583',
          400: '#ea4a5a',
          500: '#d73a49',
          600: '#cb2431',
          700: '#b31d28',
          800: '#9e1c23',
          900: '#86181d',
        },
      },
      fontFamily: {
        titillium: ['Titillium', 'sans-serif'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs: '9px',
        sm: '11px',
        base: '12px',
        md: '14px',
        lg: '28px',
        xl: '32px',
        xxl: '42px',
      },
      spacing: {
        '2.5': '10px',
        '5': '20px',
        '7.5': '30px',
        '10': '40px',
        '12.5': '50px',
      },
      boxShadow: {
        base: '0 2px 7px rgba(71, 83, 95, 0.19)',
        dark: '0 2px 7px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
