import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query
  const userId = query.userId?.toString()

  const result = await prisma.review.findMany({
    where: {
      userId: userId,
    },
    select: {
      userId: true,
      review: true,
      id: true,
      rating: true,
      escapeTheme: true,
    },
  })
  return res.status(200).json(result)
}
