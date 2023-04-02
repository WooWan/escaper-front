import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
