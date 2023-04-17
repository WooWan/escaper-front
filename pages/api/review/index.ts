import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { ReviewRequest } from '@/types/review'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return res.json(await createReview(req.body))
    case 'PUT': {
      return res.json(await createReview(req.body))
    }
  }
}

export const createReview = async (body: RequestBody) => {
  const { userId, escapeThemeId, review, rating } = body.review

  const result = await prisma.review.upsert({
    where: {
      escapeThemeId_userId: {
        userId: userId,
        escapeThemeId: escapeThemeId,
      },
    },
    update: {
      rating: rating,
      review: review,
    },
    create: {
      userId: userId,
      escapeThemeId: escapeThemeId,
      rating: rating,
      review: review,
    },
  })

  return result
}

type RequestBody = {
  review: ReviewRequest
}
