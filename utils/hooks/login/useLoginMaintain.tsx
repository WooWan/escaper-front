import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginUser } from '@/src/store/slices/user/user'
import { useQuery } from '@tanstack/react-query'
import { loginMember } from '@/src/api/member'
import { IMember } from '@/src/types/member'
import { ApiResponse } from '@/src/types/apiResponse'
import { getCookie } from '@/utils/Cookie'

export default function useLoginMaintain() {
  const { data } = useQuery<ApiResponse<IMember>>(['user'], loginMember)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = getCookie('token')
    if (token && data) {
      dispatch(loginUser(data.data))
    }
  }, [dispatch, data])
}
