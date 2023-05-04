import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

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
      } else {
        await prisma.themeLike.delete({
          where: {
            themeId_userId: {
              themeId: String(existingLike.themeId),
              userId: String(existingLike.userId),
            },
          },
        })
      }
      res.status(200).end()
      break
    }
    case 'GET': {
      const { escapeThemeId } = req.query
      const likeList = await prisma.themeLike.findMany({
        where: {
          themeId: String(escapeThemeId),
        },
        select: {
          userId: true,
          themeId: true,
        },
      })

      res.json(likeList)
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
