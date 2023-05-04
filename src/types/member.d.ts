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

type User = {
  email: string
  emailVerified: boolean
  id: string
  image: string
  name: string
}
