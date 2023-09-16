import { useEffect } from 'react';

const matchColorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');

const themeToggler = (matches: boolean) => {
  document.body.classList.toggle('dark', matches);
};

const mediaQueryListener = (e: MediaQueryListEvent) => {
  themeToggler(e.matches);
};

export function useThemeListener() {
  useEffect(() => {
    themeToggler(matchColorSchemeMedia.matches);

    matchColorSchemeMedia.addEventListener('change', mediaQueryListener);

    return () => {
      matchColorSchemeMedia.removeEventListener('change', mediaQueryListener);
    };
  }, []);
}
