import prisma from "./prisma";
import { GuestBookEntry } from "@/types/guestbook";

export async function getGuestbookEntries() {
    try {
        const entries = await prisma.guestbook.findMany({
            orderBy: {
                updated_at: "desc",
            },
            select: {
                id: true,
                body: true,
                updated_at: true,
                user: {
                    select:
                    {
                        id: true,
                        name: true,
                        image: true
                    }
                },
            }
        });



        return entries.map<GuestBookEntry>((entry) => ({
            id: entry.id.toString(),
            body: entry.body,
            updated_at: entry.updated_at.toString(),
            user: {
                id: entry.user!.id,
                name: entry.user!.name!,
                image: entry.user!.image!,
            },
        }));
    } catch (error) {
        console.error("Error getting guestbook entries: ", error);
        return [];
    }
}