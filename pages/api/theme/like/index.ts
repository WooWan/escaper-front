import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST': {
      const { escapeThemeId, userId } = req.body
      const existingLike = await prisma.themeLike.findFirst({
        where: {
          themeId: escapeThemeId,
          userId: userId,
        },
      })
      if (!existingLike) {
        await prisma.themeLike.create({
          data: {
            userId,
            themeId: escapeThemeId,
          },
        })
      }
      break
    }
    case 'GET': {
      const { escapeThemeId } = req.query
      const likeCount = await prisma.themeLike.count({
        where: {
          themeId: String(escapeThemeId),
        },
      })
      res.json(likeCount)
      break
    }
    default:
      res.status(405).end(
        JSON.stringify({
          message: 'Method Not Allowed',
        })
      )
      break
  }
}
