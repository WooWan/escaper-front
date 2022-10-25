import {useEffect} from "react";
import {enableDarkMode, enableLightMode} from "../../../store/slices/Theme";

export default function useDarkMode() {
  
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateDarkMode(isDark);
  }, []);
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    enableDarkMode()
    document.documentElement.classList.add('dark');
    document.body.dataset.theme = 'dark'
  } else {
    enableLightMode()
    document.body.dataset.theme = 'light'
    document.documentElement.classList.remove('dark');
  }
}