import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginUser } from '@/store/slices/user/user'
import { useQuery } from '@tanstack/react-query'
import { loginMember } from '@/api/member'
import { IMember } from '@/types/member'
import { ApiResponse } from '@/types/apiResponse'
import { getCookie } from '@/utils/Cookie'

export default function useLoginMaintain() {
  const { data } = useQuery<ApiResponse<IMember>>(['user'], loginMember)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = getCookie('token')
    if (token && data) {
      console.log()
      dispatch(loginUser(data.data))
    }
  }, [dispatch, data])
}
