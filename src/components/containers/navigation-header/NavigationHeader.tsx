import { Header, Box, Navigator, ToggleBtn } from './NavigationHeader.style'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectUser } from '@/src/store/slices/user/user'
import { openModal } from '@/src/store/slices/Modal'
import { useRouter } from 'next/router'
import Font from '@/src/components/core/font/Font'
import { Button } from '@/src/components/comment/comment/Comment.style'
import useToggleDarkMode from '@/src/utils/hooks/dark-mode/useToggleDarkMode'
import { selectDarkMode } from '@/src/store/slices/Theme'
import Moon from '@/src/components/icons/moon'
import Sun from '@/src/components/icons/Sun'
import { removeCookie } from '@/src/utils/Cookie'

function NavigationHeader() {
  const dispatch = useDispatch()
  const router = useRouter()
  const toggleDarkMode = useToggleDarkMode()
  const { isLogin } = useSelector(selectUser)
  const { theme } = useSelector(selectDarkMode)

  const handleModalOpen = () => {
    dispatch(
      openModal({
        modalType: 'LoginModal',
        isOpen: true,
      })
    )
  }
  const handleLogout = () => {
    removeCookie('token')
    dispatch(logoutUser())
  }
  const handleRegisterPost = (href: string) => {
    if (!isLogin) {
      dispatch(
        openModal({
          modalType: 'LoginErrorModal',
          isOpen: true,
        })
      )
    } else {
      router.push(href)
    }
  }

  return (
    <Header>
      <section>
        <Link href="/">
          <Font fontType="title" fontSize="2rem">
            Escapers
          </Font>
        </Link>
      </section>
      <Navigator>
        <ToggleBtn onClick={toggleDarkMode}>{theme === 'dark' ? <Sun /> : <Moon />}</ToggleBtn>
        <Box>
          <Button onClick={() => handleRegisterPost('/post/register')} color="white">
            방탈출 모집
          </Button>
        </Box>
        <Box>
          <Link href="/theme">테마</Link>
        </Box>
        {isLogin ? <Box onClick={handleLogout}>로그아웃</Box> : <Box onClick={handleModalOpen}>로그인/회원가입</Box>}
      </Navigator>
    </Header>
  )
}

export default NavigationHeader
