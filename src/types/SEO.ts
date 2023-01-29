export interface CommonSEOProps {
    title: string
    description: string
    ogType: string
    ogImage:
    | string
    | {
        '@type': string
        url: string
    }[]
    twImage: string
    canonicalUrl?: string
}

export interface SEOProps {
    title: string;
    description: string;
}