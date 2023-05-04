import { IMember, User } from './member'

export interface IThemesType {
  id?: number
  genre: string
}

export interface IThemeInfo {
  themeId: number
  name: string
  genre: string
  rating: number
  imageURL: string
  cafeResponse: ICafe
}

export interface IPost {
  memberResponse: IMember
  postId: number
  title: string
  content: string
  createdDate: Date
  appointmentDate: Array
  views: number
  participation: number
  imageURL: string
  themeResponse: IThemeInfo
}

export interface IPostsPagination {
  content: IPost[]
}

export interface ICommentUpdateRequest {
  commentId: number
  postId: number
  content: string
}
export interface IComment {
  postId: number
  content: string
}

export interface ICommentResponse {
  memberResponse: IMember
  id: number
  postId: string | string[] | undefined
  content: string
  createdDate: Date
}

export type ReviewType = {
  createdAt: Date
  escapeThemeId: string
  id: string
  likeCount: number
  rating: number
  review: string
  userId: string
  user: User
}

export interface ICafe {
  id: number
  name: string
  address: IAddress
  phoneNumber: string
  themes: IThemeInfo[]
}

export interface IAddress {
  city: string
  area: string
  streets: string
  detail: string
}
