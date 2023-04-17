import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.escapeTheme.findMany({
    include: {
      cafe: true,
    },
    orderBy: {
      rating: 'asc',
    },
  })
  return res.status(200).json(result)
}
