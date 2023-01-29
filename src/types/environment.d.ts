export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GISCUS_REPO: string;
            NEXT_PUBLIC_GISCUS_REPOSITORY_ID: string;
            NEXT_PUBLIC_GISCUS_CATEGORY: string;
            NEXT_PUBLIC_GISCUS_CATEGORY_ID: string;

            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
            SPOTIFY_REFRESH_TOKEN: string;
        }
    }
}