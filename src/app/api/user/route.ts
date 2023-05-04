import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/src/lib/prisma'

export async function PUT(req: NextRequest) {
  const res = await req.json()
  const result = await prisma.user.update({
    where: {
      id: res.id,
    },
    data: {
      name: res.username,
    },
  })
  return NextResponse.json(result)
}
