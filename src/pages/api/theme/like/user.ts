import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.userId
  switch (req.method) {
    case 'GET': {
      const themeList = await prisma.user.findUnique({
        where: {
          id: String(id),
        },
        select: {
          likedEscapeThemes: {
            select: {
              themeId: true,
              theme: true,
            },
          },
        },
      })
      res.json(themeList?.likedEscapeThemes)
      break
    }
  }
}
