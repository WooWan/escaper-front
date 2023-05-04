import { getServerSession } from 'next-auth'
import { authOptions } from '@/src/pages/api/auth/[...nextauth]'
import { AuthUser } from '@/src/types/member'

export async function withSessionUser(handler: (user: AuthUser) => Promise<Response>): Promise<Response> {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    return new Response('Authentication Error', { status: 401 })
  }

  return handler(user)
}
