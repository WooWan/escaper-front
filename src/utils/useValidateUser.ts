import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '@/src/store/slices/Modal'
import { selectUser } from '@/src/store/slices/user/user'

function useValidateUser() {
  const { user, isLogin } = useSelector(selectUser)
  const dispatch = useDispatch()

  const validateUser = () => {
    if (!isLogin) {
      dispatch(openModal({ modalType: 'LoginErrorModal', isOpen: true }))
    }
  }

  return { user, validateUser }
}

export default useValidateUser
