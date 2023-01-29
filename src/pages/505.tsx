import { PageSEO } from '@/components/SEO'

export default function FiveZeroFive() {
    return (
        <>
            <PageSEO title="500 - Vahry Iskandar" description="500 - Internal Server Error" />
            <div className="flex flex-col justify-center items-center min-h-screen py-2 -mt-24 text-center">
                <h1 className="text-9xl font-bold">500</h1>
                <h2 className="text-6xl font-medium">Internal Server Error</h2>
                <p className="text-2xl font-light">The server encountered an internal error and was unable to complete your request.</p>
            </div>
        </>
    )
}