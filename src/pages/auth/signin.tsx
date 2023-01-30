import LoginButton from '@/components/Auth/LoginButton'
import { getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageSEO } from '@/components/SEO'
import ErrorMessage from '@/components/ErrorMessage'
import { NextPageContext } from 'next/types'

export default function SignIn({ providers }: {
    providers: Awaited<ReturnType<typeof getProviders>>;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (router.query.error) {
            setIsOpen(true);
        }
    }, [router]);

    return (
        <>
            <PageSEO
                title={`Sign In - Vahry Iskandar`}
                description={`Sign In - Vahry Iskandar`}
            />
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Sign In
                </h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    Sign in to your account
                </p>
            </div>
            <div className="flex flex-col items-center justify-items-center space-y-2 xl:space-y-0">
                <div className="prose max-w-none p-8 dark:prose-dark">
                    <div className="flex flex-col items-center justify-between gap-4">
                        {isOpen ? (
                            <>
                                <ErrorMessage>Error</ErrorMessage>
                            </>
                        ) : (
                            <p className="text-center sm:text-left">
                                Sign in to access guestbook features and more
                            </p>
                        )}

                        {providers &&
                            Object.values(providers).map((provider) => {
                                return <LoginButton key={provider.id} provider={provider} />
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context: NextPageContext) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}