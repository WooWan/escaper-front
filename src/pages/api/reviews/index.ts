import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.themeId?.toString()
  const userId = req.query.userId?.toString()

  const reviewList = await prisma.review.findMany({
    where: {
      escapeThemeId: id,
      NOT: {
        userId: userId,
      },
    },
    include: {
      user: true,
    },
  })
  return res.status(200).json(reviewList)
}
