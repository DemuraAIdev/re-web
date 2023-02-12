import { Conta } from '@/types';
import { useRouter } from "next/router";
import Link from './CustomLink';
import { headerNavLinks } from '@/config/NavLinks';
import Container from './Container';
import MobileNav from './SmNav';
import SwitchDark from './DarkSwitch';
import Footer from './Footer';


export default function NavigationBar({ children }: Conta) {
    return (
        <div className="z-50 flex h-screen flex-col justify-between">
            <header className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 fixed top-0 z-20 flex w-full items-center  justify-between bg-white bg-opacity-30 py-4 backdrop-blur-lg backdrop-saturate-150 backdrop-filter  dark:bg-[#111010] dark:bg-opacity-30 ">
                <nav className="mx-auto flex w-full max-w-md items-center justify-between px-4 sm:px-4 sm:py-2 md:max-w-2xl md:px-0 xl:max-w-2xl xl:px-0">
                    <div className="flex w-full items-center justify-between text-base leading-5">
                        <div className="hidden text-lg sm:block sm:space-x-8">
                            {headerNavLinks.map((link) => (
                                <NavItem
                                    key={link.title}
                                    href={link.href}
                                    text={link.title}
                                />
                            ))}
                        </div>
                        <SwitchDark />
                    </div>
                    <MobileNav />
                </nav>
            </header>
            <Container>
                <main className="mb-auto mt-20">{children}</main>
                <Footer />
            </Container>

        </div>
    )
}
function NavItem({ href, text }: { href: string, text: string }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link
            key={text}
            href={href}
            className={
                isActive
                    ? "rounded-lg p-1 font-semibold text-black transition-all hover:scale-125 hover:bg-gray-200 hover:text-black dark:text-white  dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block "
                    : "rounded-lg p-1 font-medium text-gray-500 transition-all hover:scale-125 hover:bg-gray-200 hover:text-black dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block"
            }
        >
            {text}
        </Link>
    );
}