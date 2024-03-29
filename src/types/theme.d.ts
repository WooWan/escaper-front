import { IAddress } from './index'
import { ReviewType } from '@/src/types/index'

export interface IThemeDetail {
  themeId: number
  name: number
  genre: number
  description: number
  timeLimitation: number
  themeRating: number
  cost: number
  imageURL: string
  cafeId: number
  phoneNumber: string
  cafeName: string
  address: IAddress
}

export type ThemeDetail = {
  id: string
  name: number
  description: number
  timeLimitation: number
  rating: number
  cafeId: string
  cost: number
  imageURL: string
  cafe: CafeType
  reviewList: ReviewType[]
}

export type CafeType = {
  id: string
  name: string
  address: string
  city: string
  phoneNumber: string
  website: string
  rating: number
  themeList: ThemeDetail[]
}

export type LikeEscapeThemeByUser = {
  themeId: string
  theme: ThemeDetail
}
