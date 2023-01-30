import Guestbook from "@/components/Guestbook";
import { PageSEO } from "@/components/SEO";
import { GuestBookEntry } from "@/types/guestbook";

import { getGuestbookEntries } from "@/lib/guestbook";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSessions } from "@/lib/getServerSession";

export default function GuestbookPage({
    entries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <PageSEO
                title={`GuestBook - Vahry Iskandar`}
                description={"SignIn"}
            />
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Guestbook
                </h1>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Leave a comment below. It could be anything – appreciation,
                    information, wisdom, or even humor. Surprise me!
                </p>
                <Guestbook fallbackData={entries} />
            </div>
        </>
    )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
    const entries = await getGuestbookEntries();
    const session = await getServerSessions(req, res);

    return {
        props: {
            session,
            entries,
        },
    };
}


