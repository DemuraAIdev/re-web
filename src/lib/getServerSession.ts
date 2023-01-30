import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next";

export const getServerSessions = (
    req: GetServerSidePropsContext["req"],
    res: GetServerSidePropsContext["res"]
) => {
    return getServerSession(req, res, authOptions);
}