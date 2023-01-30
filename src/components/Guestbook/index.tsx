import { useState, useRef, Suspense, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { GuestbookEntry } from "./GuestbookEntry";
import fetcher from '@/lib/Fetcher'
import SuccessMessage from '@/components/SuccessMessage'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/Animation/LoadingSpinner'
import LoginBut from '@/components/Auth/LoginGuestBook'
import { GuestBookEntry } from '@/types/guestbook'
import useSWR, { useSWRConfig } from 'swr'


export default function Guestbook({ fallbackData }: { fallbackData: GuestBookEntry[] }) {
    const [form, setForm] = useState<{ state: String; message: string; }>({ state: 'Inital', message: '' })
    const inputEl = useRef<HTMLTextAreaElement>(null);
    const { data: session } = useSession();
    const { error: entriesError, data: entries } = useSWR<GuestBookEntry[]>(
        "/api/guestbook",
        fetcher,
        {
            fallbackData,
        }
    );
    const { mutate } = useSWRConfig();

    const leaveEntry = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setForm({ state: 'Loading', message: 'Loading...' })

        const res = await fetch('/api/guestbook', {
            body: JSON.stringify({
                body: inputEl.current?.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        const { error } = await res.json()
        if (error) {
            setForm({
                state: 'Error',
                message: error,
            })
            return
        }

        if (inputEl.current) inputEl.current.value = "";
        mutate('/api/guestbook')
        setForm({
            state: 'Success',
            message: `Wow! That was Giga.`,
        })
    }
    return (
        <>
            <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6 shadow-xl transition dark:border-gray-800 dark:bg-black dark:shadow-none">
                <LoginBut message="Login to sign the guestbook." />
                {Boolean(session?.user) && (
                    <form className="relative my-4" onSubmit={leaveEntry}>
                        <textarea
                            ref={inputEl}
                            aria-label="Your message"
                            placeholder="Your message..."
                            required
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 bg-white py-2 pl-4 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
                        />
                        <button
                            className="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                            type="submit"
                        >
                            {form.state === 'Loading' ? <LoadingSpinner /> : 'Sign'}
                        </button>
                    </form>
                )}
                {form.state === 'Error' ? (
                    <ErrorMessage>{form.message}</ErrorMessage>
                ) : form.state === 'Success' ? (
                    <SuccessMessage>{form.message}</SuccessMessage>
                ) : (
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                        Your information is only used to display your name and reply by email.
                    </p>
                )}
            </div>
            <div className="mt-4 space-y-8">
                <Suspense fallback={null}>
                    {entriesError && (
                        <ErrorMessage>
                            An unexpected error occurred. The entries are not available for now. Please try again
                            later
                        </ErrorMessage>
                    )}
                    {entries ? (
                        entries.map((entry) => (
                            <GuestbookEntry key={entry.id} entry={entry} currentUserId={session?.id as string} />
                        ))
                    ) : (
                        <LoadingSpinner />
                    )}
                </Suspense>
            </div>
        </>
    )

}