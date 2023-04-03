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
      console.log(`userId: ${userId}, escapeThemeId: ${escapeThemeId}, existingLike: ${existingLike}`)
      if (!existingLike) {
        await prisma.themeLike.create({
          data: {
            userId,
            themeId: escapeThemeId,
          },
        })
      }
    }
    case 'GET': {
      const { escapeThemeId } = req.query
      const likeCount = await prisma.themeLike.count({
        where: {
          themeId: String(escapeThemeId),
        },
      })
      res.json(likeCount)
    }
  }
}
