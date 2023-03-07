import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { ReviewRequest } from '@/api/review'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return res.json(await createReview(req.body))
  }
}
type RequestBody = {
  review: ReviewRequest
}
export const createReview = async (body: RequestBody) => {
  const { userId, escapeThemeId, review } = body.review
  const result = await prisma.review.create({
    data: {
      userId: userId,
      escapeThemeId: escapeThemeId,
      review: review,
    },
  })

  return result
}
