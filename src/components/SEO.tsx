import Head from "next/head";
import { useRouter } from "next/router";
import type { FrontMatter } from "@/lib/mdx";

interface CommonSEOProps {
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
const CommonSEO = ({
    title,
    description,
    ogType,
    ogImage,
    twImage,
    canonicalUrl,
}: CommonSEOProps) => {
    const router = useRouter()
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={`https://vahryiskandar.my.id${router.asPath}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="Vahry Iskandar" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {Array.isArray(ogImage) ? (
                ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
            ) : (
                <meta property="og:image" content={ogImage} key={ogImage} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={"https://vahryiskandar.my.id"} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
            <link
                rel="canonical"
                href={canonicalUrl ? canonicalUrl : `https://vahryiskandar.my.id${router.asPath}`}
            />
        </Head>
    )
}
interface SEOProps {
    title: string;
    description: string;
}
export const PageSEO = ({ title, description }: SEOProps) => {
    const ogImageUrl = "https://vahryiskandar.my.id/static/images/twitter-card.png";
    const twImageUrl = "https://vahryiskandar.my.id/static/images/twitter-card.png";
    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    );
};
export const TagSEO = ({ title, description }: SEOProps) => {
    const ogImageUrl = "https://vahryiskandar.my.id/static/images/twitter-card.png";
    const twImageUrl = "https://vahryiskandar.my.id/static/images/twitter-card.png";
    const router = useRouter();
    return (
        <>
            <CommonSEO
                title={title}
                description={description}
                ogType="website"
                ogImage={ogImageUrl}
                twImage={twImageUrl}
            />
            <Head>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title={`${description} - RSS feed`}
                    href={`https://vahryiskandar.my.id${router.asPath}/feed.xml`}
                />
            </Head>
        </>
    );
};

interface BlogSeoProps extends FrontMatter {
    url: string
}

export const BlogSEO = ({
    title,
    summary,
    date,
    lastmod,
    url,
    images = [],
    canonicalUrl,
}: BlogSeoProps) => {
    const publishedAt = new Date(date).toISOString()
    const modifiedAt = new Date(lastmod || date).toISOString()
    const imagesArr =
        images.length === 0
            ? ["/static/images/twitter-card.png"]
            : typeof images === 'string'
                ? [images]
                : images

    const featuredImages = imagesArr.map((img: string) => {
        return {
            "@type": "ImageObject",
            url: `https://vahryiskandar.my.id${img}`,
        };
    });


    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: title,
        image: featuredImages,
        datePublished: publishedAt,
        dateModified: modifiedAt,
        author: 'Abdul Vaiz',
        publisher: {
            "@type": "Organization",
            name: "Abdul Vaiz",
            logo: {
                "@type": "ImageObject",
                url: `https://vahryiskandar.my.id/static/images/logo.png`,
            },
        },
        description: summary,
    }

    const twImageUrl = featuredImages[0].url

    return (
        <>
            <CommonSEO
                title={title}
                description={summary}
                ogType="article"
                ogImage={featuredImages}
                twImage={twImageUrl}
                canonicalUrl={canonicalUrl}
            />
            <Head>
                {date && <meta property="article:published_time" content={publishedAt} />}
                {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData, null, 2),
                    }}
                />
            </Head>
        </>
    )
}