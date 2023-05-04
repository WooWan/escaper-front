import axios from 'axios'
import { UserRequest } from '@/src/types/member'

export const updateUser = async (userRequest: UserRequest) => {
  return await axios.put('/api/user', {
    id: userRequest.id,
    username: userRequest.username,
  })
}
