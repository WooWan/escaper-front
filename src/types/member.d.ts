export interface IMember {
  profileImageUrl: string
  providerType: string
  roleType: string
  id: number
  username: string
}
export interface ISignUpForm {
  nickname: string
}

export interface ISignUpRequest extends ISignUpForm {
  email: string | string[] | undefined
}

export type AuthUser = {
  id: string
  email: string
  emailVerified: boolean
  image: string
  username: string
}

export type UserRequest = {
  id: string
  username?: string
  email?: string
  image?: string
}
