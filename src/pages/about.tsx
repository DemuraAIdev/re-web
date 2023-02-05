import { MDXLayoutRenderer } from "@/components/MDXCompo";
import { getFileBySlug } from '@/lib/mdx'
import { AuthorFrontMatter } from "@/types/Component";
import { InferGetStaticPropsType } from "next";

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
    const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [`default`])
    return { props: { authorDetails } }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { mdxSource, frontMatter } = authorDetails

    return (
        <MDXLayoutRenderer
            layout={DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
        />
    )
}