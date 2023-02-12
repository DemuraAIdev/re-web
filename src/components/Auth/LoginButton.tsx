import { ClientSafeProvider, signIn } from 'next-auth/react'
import Github from '../Icons/github.svg'
import Osu from '../Icons/osu.svg'
import { useRouter } from 'next/router'

interface StyleGuide {
    Logo: any;
    bg: string;
    text: string;
}

const providerStyleGuides: { [key: string]: StyleGuide } = {
    github: {
        Logo: Github,
        bg: 'bg-white',
        text: 'text-black',
    },
    osu: {
        Logo: Osu,
        bg: 'bg-[#FF66AA]',
        text: 'text-white',
    },
}

export default function LoginButton({ provider }: { provider: ClientSafeProvider }) {
    const { Logo, bg, text } = providerStyleGuides[provider.id]
    const router = useRouter()
    const { callbackUrl } = router.query
    return (
        <div key={provider.name}>
            <button
                className={`focus:shadow-outline-primary flex h-12 w-56 items-center gap-3 rounded-lg border border-transparent text-sm font-medium leading-5 shadow transition-colors duration-150 focus:outline-none
         ${bg}
         ${text} `}
                onClick={() => signIn(provider.id, { callbackUrl: callbackUrl as string })}
            >
                {<Logo className="h-full p-2" />}
                Sign in with {provider.name}
            </button>
        </div>
    )
}