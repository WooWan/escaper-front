import { ThemeDetail } from '@/types/theme'
import { User } from '@/types/member'

export type ReviewResponse = {
  id: string
  userId: string
  escapeThemeId: string
  createdAt: Date
  likeCount: number
  rating?: number
  review?: string
  escapeTheme: ThemeDetail
  user: User
}

export type ReviewRequest = {
  escapeThemeId: string
  userId: string
  rating?: number
  review?: string
}
