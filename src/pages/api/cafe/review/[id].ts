import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id

  const reviewList = await prisma.cafe.findUnique({
    where: {
      id: String(id),
    },
    include: {
      themeList: {
        include: {
          reviewList: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  })

  return res.status(200).json(reviewList)
}
