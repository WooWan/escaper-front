import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const id = req.query.id?.toString()

      const reviewList = await prisma.review.findMany({
        where: {
          escapeThemeId: id,
        },
        include: {
          user: true,
        },
      })
      return res.status(200).json(reviewList)
    }
    case 'DELETE': {
      const id = req.query.id?.toString()
      const review = await prisma.review.delete({
        where: {
          id: id,
        },
      })
      return res.status(200).json(review)
    }
    case 'PUT': {
      const id = req.query.id?.toString()
      const { review, rating } = req.body
      const result = await prisma.review.update({
        where: {
          id: id,
        },
        data: {
          review: review,
          rating: rating,
        },
      })
      return res.status(200).json(result)
    }
  }
}
