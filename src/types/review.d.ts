import { ThemeDetail } from '@/src/types/theme'
import { User } from '@/src/types/member'

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
