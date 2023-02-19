import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.JWT_SECRET!,
  callbacks: {
    // async jwt(token, user, account, profile, isNewUser) {

    // },
    async session({ session, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = user.id
      return session
    },
  },
})
