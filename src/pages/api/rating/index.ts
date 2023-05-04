import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'
import withErrorHandling from '@/src/lib/error/withErrorHandling'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const review = await getReview(req.query)
      return res.json(review)
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
    include: {
      user: true,
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

export default withErrorHandling(handler)
