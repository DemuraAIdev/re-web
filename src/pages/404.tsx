import { PageSEO } from '@/components/SEO'
import Link from "@/components/CustomLink";


export default function FourZeroFour() {
    return (
        <>
            <PageSEO title="404 - Vahry Iskandar" description="404 - Not Found" />
            <div className="flex flex-col justify-center items-center min-h-screen py-2 -mt-24 text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-6xl font-medium">Page Not Found</h2>
                <p className="text-2xl font-light">The page you are looking for does not exist.</p>
                <Link href="/" className="text-blue-500 hover:underline">Go back home</Link>
            </div>
        </>
    )
}