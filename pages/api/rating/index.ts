import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      return res.json(await getReview(req.query))
    }
    case 'POST': {
      const result = await createRating(req.body)
      await updateThemeRate(req.body.escapeThemeId)
      return res.json(result)
    }
    case 'PUT': {
      const result = await updateRating(req.body)
      await updateThemeRate(req.body.escapeThemeId)
      return res.json(result)
    }
  }
}

const getReview = async (
  param: Partial<{
    [key: string]: string | string[]
  }>
) => {
  const { memberId, themeId } = param

  const result = await prisma.review.findUnique({
    where: {
      escapeThemeId_userId: {
        escapeThemeId: String(themeId),
        userId: String(memberId),
      },
    },
  })
  return result
}

const createRating = async (body: any) => {
  const { memberId, escapeThemeId, rating } = body
  const result = await prisma.review.create({
    data: {
      userId: String(memberId),
      escapeThemeId: String(escapeThemeId),
      rating: rating,
    },
  })

  return result
}

const updateRating = async (body: any) => {
  const { memberId, escapeThemeId, rating } = body
  console.log(body)
  const result = await prisma.review.update({
    where: {
      escapeThemeId_userId: {
        userId: String(memberId),
        escapeThemeId: String(escapeThemeId),
      },
    },
    data: {
      rating: rating,
    },
  })
  return result
}

const updateThemeRate = async (id: string) => {
  console.log('id', id)
  const reviews = await prisma.review.findMany({
    where: {
      escapeThemeId: id,
    },
  })

  const rating =
    reviews.filter((review) => review.rating !== null).reduce((acc, cur) => acc + cur.rating!, 0) / reviews.length
  const result = await prisma.escapeTheme.update({
    where: {
      id: id,
    },
    data: {
      rating: rating,
    },
  })
  return result
}
