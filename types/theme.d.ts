import { IAddress } from './index'

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

export interface IMemberRating {
  memberRating: number
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
  cafe: Cafe
}

export type Cafe = {
  id: string
  name: string
  address: string
  city: string
  phoneNumber: string
  website: string
  rating: number
}
