import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query

  const result = await prisma.escapeTheme.findMany({
    include: {
      cafe: true,
    },
    where: {
      OR: [
        {
          name: {
            contains: String(search),
          },
        },
        {
          cafe: {
            street: { contains: String(search) },
          },
        },
        {
          cafe: {
            name: { contains: String(search) },
          },
        },
      ],
    },
  })
  return res.status(200).json(result)
}
