import { PageSEO } from "@/components/SEO";

export default function OfflinePage() {
    return (
        <>
            <PageSEO title="Offline - Vahry Iskandar" description="Offline - Vahry Iskandar" />
            <div className="flex flex-col justify-center items-center min-h-screen py-2 -mt-24 text-center">
                <h1 className="text-9xl font-bold">Offline</h1>
                <h2 className="text-6xl font-medium">You are offline</h2>
                <p className="text-2xl font-light">You are offline, please check your connection.</p>
            </div>
        </>
    );
}