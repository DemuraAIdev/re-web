import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXCompo'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FrontMatter } from "@/lib/mdx";

const DEFAULT_LAYOUT = 'PostLayout'

type Toc = {
    value: string
    depth: number
    url: string
}[]

export async function getStaticPaths() {
    const posts = getFiles('blog')
    return {
        paths: posts.map((p) => ({
            params: {
                slug: formatSlug(p).split('/'),
            },
        })),
        fallback: false,
    }
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
    post: { mdxSource: string; toc: Toc; frontMatter: FrontMatter }
    prev?: { slug: string; title: string }
    next?: { slug: string; title: string }
}> = async ({ params }) => {
    const slug = (params.slug as string[]).join('/')
    const allPosts = await getAllFilesFrontMatter('blog')
    const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug)
    const prev: { slug: string; title: string } = allPosts[postIndex + 1] || null
    const next: { slug: string; title: string } = allPosts[postIndex - 1] || null
    const post = await getFileBySlug<FrontMatter>('blog', slug)

    // rss
    if (allPosts.length > 0) {
        const rss = generateRss(allPosts)
        fs.writeFileSync('./public/feed.xml', rss)
    }

    return {
        props: {
            post,
            prev,
            next,
        },
    }
}

export default function Blog({
    post,
    prev,
    next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { mdxSource, toc, frontMatter } = post

    return (
        <>
            {'draft' in frontMatter && frontMatter.draft !== true ? (
                <MDXLayoutRenderer
                    layout={frontMatter.layout || DEFAULT_LAYOUT}
                    toc={toc}
                    mdxSource={mdxSource}
                    frontMatter={frontMatter}
                    prev={prev}
                    next={next}
                />
            ) : (
                <div className="mt-24 text-center">
                    <PageTitle>
                        Under Construction{' '}
                        <span role="img" aria-label="roadwork sign">
                            🚧
                        </span>
                    </PageTitle>
                </div>
            )}
        </>
    )
}
