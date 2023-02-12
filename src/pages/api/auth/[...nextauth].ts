import NextAuth, { NextAuthOptions, Session } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import OsuProvider from "next-auth/providers/osu";
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
        OsuProvider({
            clientId: process.env.OSU_CLIENT_ID,
            clientSecret: process.env.OSU_CLIENT_SECRET
        })
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