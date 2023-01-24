import Link from './CustomLink'
import NowPlaying from './NowPlaying'
import NavLinks from "@/config/NavLinks"

export default function Footer() {
    return (
        <footer className="mt-10">
            <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
            <div className="mb-10">
                <NowPlaying />
            </div>
            <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
                <div className="flex flex-col space-y-4">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col space-y-4">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col space-y-4">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mb-9 flex space-x-2 text-sm text-black dark:text-gray-400">
                <div>Abdul Vaiz</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
                <div>{` • `}</div>
                <Link href="/">Vahry Iskandar</Link>
                <span className="black ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none dark:bg-zinc-800 dark:text-zinc-400">
                    5.0
                </span>
            </div>
        </footer>
    )
}