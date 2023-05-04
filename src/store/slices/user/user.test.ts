import { store } from '@/src/store/config'
import { IMember } from '@/src/types/member'
import { loginUser, logoutUser, UserState } from './user'

describe('user test', () => {
  let state: UserState
  let user: IMember
  beforeEach(() => {
    state = store.getState().user
    user = {
      id: 1,
      username: 'test',
      profileImageUrl: 'test',
      providerType: 'test',
      roleType: 'test',
    }
  })
  it('initial state', () => {
    expect(state.isLogin).toBe(false)
  })

  it('loginUser', () => {
    store.dispatch(loginUser(user))
    const newState = store.getState().user
    expect(newState.isLogin).toBe(true)
    expect(newState.user).toEqual(user)
  })

  it('logout User', () => {
    store.dispatch(logoutUser())
    const newState = store.getState().user
    expect(newState.isLogin).toBe(false)
    expect(newState.user).toBeNull()
  })
})
