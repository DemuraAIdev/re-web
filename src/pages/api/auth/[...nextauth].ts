import NextAuth, { NextAuthOptions, Session } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

type CustomSession = Session & {
    id: string;
};

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
            const customSession = session as CustomSession;
            customSession.id = user.id;
            return Promise.resolve(customSession);
        },
    },
}


export default NextAuth(authOptions)