import { useState } from 'react'
import { format } from 'date-fns'
import Image from "next/image";
import LoadingSpinner from '@/components/Animation/LoadingSpinner'
import PersonOut from './Icons/PersonOut.svg'
import { GuestBookEntry } from '@/types/guestbook'
import { useSWRConfig } from 'swr'

interface GuestbookEntryProps {
    entry: GuestBookEntry;
    currentUserId: string;
}

export function GuestbookEntry({ entry, currentUserId }: GuestbookEntryProps) {
    const { mutate } = useSWRConfig()
    const [isDeleting, setIsDeleting] = useState(false);
    const { user, body, updated_at } = entry;

    return (
        <>
            {isDeleting ? (
                <LoadingSpinner />
            ) : (
                <div className="flex flex-col space-y-2">
                    <div className="prose w-full  dark:prose-dark">{body}</div>
                    <div className="flex items-center space-x-3">
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                        ) : (
                            <PersonOut className="w-5 h-5 rounded-full fill-current text-primary-600 dark:text-primary-400" />
                        )}
                        <p className="text-sm text-gray-500">{user.name}</p>
                        <span className=" text-gray-200 dark:text-gray-800">/</span>
                        <p className="text-sm text-gray-400 dark:text-gray-600">
                            {format(new Date(updated_at), "d MMM yyyy 'at' h:mm bb")}
                        </p>
                        {currentUserId === user.id && (
                            <>
                                <span className="text-gray-200 dark:text-gray-800">/</span>
                                <button className="text-sm text-red-600 dark:text-red-400" onClick={async (e) => {
                                    e.preventDefault();
                                    setIsDeleting(true);

                                    await fetch(`/api/guestbook/${entry.id}`, {
                                        method: "DELETE",
                                    });

                                    mutate("/api/guestbook");
                                }}>
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )
            }
        </>
    )
}

