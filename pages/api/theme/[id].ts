import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id?.toString()
  const themeList = await prisma.escapeTheme.findUnique({
    where: {
      id: id,
    },
    include: {
      cafe: true,
    },
  })
  console.log(themeList)

  return res.status(200).json(themeList)
}
