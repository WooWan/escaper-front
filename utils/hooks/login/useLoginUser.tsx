import { useEffect } from 'react'
import { loginMember } from '../../../api/member'
import { loginUser, selectUser } from '../../../store/slices/user/user'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../../store/slices/Token'
import { setCookie } from '../../Cookie'

export default function useLoginUser() {
  const router = useRouter()
  const { query } = router
  const dispatch = useDispatch()
  const { isLogin } = useSelector(selectUser)

  useEffect(() => {
    const { token } = query
    if (!token || isLogin) return

    dispatch(
      setToken({
        accessToken: token,
      })
    )

    setCookie('token', token, { path: '/', httpOnly: true })
    loginMember()
      .then((data) => data.data)
      .then((result) => dispatch(loginUser(result)))
      .then(() => setCookie('token', token, { path: '/', httpOnly: true }))
      .catch((error) => console.log(error))
      .finally(() => router.push('/'))
  }, [dispatch, query, router, isLogin])
}
