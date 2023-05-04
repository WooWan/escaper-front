import { useDispatch, useSelector } from 'react-redux'
import { enableDarkMode, enableLightMode, selectDarkMode } from '@/src/store/slices/Theme'

export default function useToggleDarkMode() {
  const dispatch = useDispatch()
  const { theme } = useSelector(selectDarkMode)

  function saveTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme)
  }
  function toggle() {
    if (theme === 'dark') {
      dispatch(enableLightMode())
      saveTheme('light')
      document.body.dataset.theme = 'light'
    } else {
      dispatch(enableDarkMode())
      saveTheme('dark')
      document.body.dataset.theme = 'dark'
    }
  }

  return toggle
}
