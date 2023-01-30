import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async session({ session, user, token }) {
            session.id = user.id;
            return Promise.resolve(session);
        },
    },
}


export default NextAuth(authOptions)