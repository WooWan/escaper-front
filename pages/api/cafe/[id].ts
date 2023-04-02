import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id

  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getCafe(String(id)))
  }
}

export const getCafe = async (id: string) => {
  return prisma.cafe.findUnique({
    where: {
      id: id,
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
}
